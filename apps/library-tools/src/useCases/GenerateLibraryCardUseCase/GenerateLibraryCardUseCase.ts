import { binaryToBase64 } from '@repo/utils/binaryToBase64';
import { generateBarcode } from '@repo/utils/generateBarcode';

export type LibraryCardPdfRenderer = {
  createPdf(params: {
    name: string;
    barcode: string;
    barcodeImage: Uint8Array;
  }): Promise<Uint8Array>;
};

export type GenerateLibraryCardRequest = {
  name: string;
  barcode: string;
};

export class GenerateLibraryCardUseCase {
  constructor(private pdfRenderer: LibraryCardPdfRenderer) {}

  async generate(request: GenerateLibraryCardRequest): Promise<string> {
    const barcodeImage = await generateBarcode(request.barcode);
    const pdfBytes = await this.pdfRenderer.createPdf({
      name: request.name,
      barcodeImage,
      barcode: request.barcode,
    });
    return binaryToBase64(pdfBytes);
  }
}
