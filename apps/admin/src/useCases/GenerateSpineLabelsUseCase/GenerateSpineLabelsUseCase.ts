import { Db } from '@repo/db/Db';
import { Book } from '@repo/entities/Book';
import { Avery5160PdfRenderer } from '@repo/pdf-renderer/Avery5160PdfRenderer';
import { binaryToBase64 } from '@repo/utils/binaryToBase64';

export class Label {
  constructor(
    public readonly classificationNumber: string,
    public readonly authorNumber: string,
    public readonly copyNumber: string,
    public readonly yearPublished: string,
    public readonly barcode: string,
  ) {}
}

export class GenerateSpineLabelsUseCase {
  constructor(
    private db: Db,
    private pdfRenderer: Avery5160PdfRenderer,
  ) {}

  async execute(bookIds: string[]) {
    const books: Book[] = await this.db.getBooks(bookIds);
    const labels: Label[] = this.convertBooksToLabels(books);
    const pdfBytes = await this.pdfRenderer.runDrawLabels(labels);
    return binaryToBase64(pdfBytes);
  }

  private convertBooksToLabels(books: Book[]) {
    const labels: Label[] = [];
    for (const book of books) {
      const label = this.convertBookToLabel(book);
      labels.push(label);
    }
    return labels;
  }

  private convertBookToLabel(book: Book): Label {
    return new Label(
      book.classificationNumber,
      book.authorNumber,
      book.yearPublished,
      book.copyNumber,
      book.barcode,
    );
  }
}
