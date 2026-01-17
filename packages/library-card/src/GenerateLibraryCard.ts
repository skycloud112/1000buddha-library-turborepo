import { binaryToBase64 } from '@repo/utils/binaryToBase64';

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

export type BarCodeGenerator = {
  generate(barcode: string): Promise<Uint8Array>;
};

export class GenerateLibraryCard {
  constructor(
    private barcodeGenerator: BarCodeGenerator,
    private pdfRenderer: LibraryCardPdfRenderer,
  ) {}

  async generate(request: GenerateLibraryCardRequest): Promise<string> {
    const barcodeImage = await this.barcodeGenerator.generate(request.barcode);
    const pdfBytes = await this.pdfRenderer.createPdf({
      name: request.name,
      barcodeImage,
      barcode: request.barcode,
    });
    return binaryToBase64(pdfBytes);
  }
}
