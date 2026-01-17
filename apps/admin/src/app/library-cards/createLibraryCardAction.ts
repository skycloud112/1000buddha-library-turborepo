'use server';

import { GenerateLibraryCardUseCase } from '../../useCases/GenerateLibraryCardUseCase/GenerateLibraryCardUseCase.ts';
import { LibraryCardPdfRendererFileReader } from '../../useCases/GenerateLibraryCardUseCase/LibraryCardPdfRendererFileReader.ts';
import { LibraryCardPdfRenderer } from '../../useCases/GenerateLibraryCardUseCase/LibraryCardPdfRenderer.ts';
import { sessionGuard } from '../../session.ts';

export const createLibraryCardAction = async ({
  name,
  barcode,
}: {
  name: string;
  barcode: string;
}) => {
  await sessionGuard();
  const fileReader = new LibraryCardPdfRendererFileReader();
  const pdfRenderer = new LibraryCardPdfRenderer(fileReader);
  const useCase = new GenerateLibraryCardUseCase(pdfRenderer);
  return useCase.generate({ name, barcode });
};
