import { Book } from '@repo/entities/Book';
import { Db } from '@repo/db/Db';
import { Avery5160PdfRenderer } from '@repo/pdf-renderer/Avery5160PdfRenderer';
import { binaryToBase64 } from '@repo/utils/binaryToBase64';
import { generateBarcode } from '@repo/utils/generateBarcode';

export type Label = {
  chineseHeaderText: string;
  barcodeImage: Uint8Array;
  barcodeValue: string;
};

export class GenerateBarcodeLabels {
  constructor(
    private db: Db,
    private pdfRenderer: Avery5160PdfRenderer,
  ) {}

  async execute(bookIds: string[]) {
    const books: Book[] = await this.db.getBooks(bookIds);
    const barcodes = [];
    for (const book of books) {
      barcodes.push(book.barcode);
    }
    const labels = await this.createLabels(barcodes);
    const pdfBinary = await this.pdfRenderer.runDrawLabels(labels);
    return binaryToBase64(pdfBinary);
  }

  async createLabels(barcodes: string[]) {
    const labels = [];
    for (let i = 0; i < barcodes.length; i++) {
      const label = await this.createLabel(barcodes[i] as string);
      labels.push(label);
    }
    return labels;
  }

  async createLabel(barcode: string) {
    const label = {
      chineseHeaderText: '千佛寺圖書館',
      barcodeImage: await generateBarcode(barcode),
      barcodeValue: barcode,
    };
    return label;
  }
}
