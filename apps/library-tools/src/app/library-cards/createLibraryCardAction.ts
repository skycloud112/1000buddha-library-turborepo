'use server';

import { GenerateLibraryCard } from '@repo/library-card/GenerateLibraryCard';
import { LibraryCardPdfRendererFileReader } from '@repo/library-card/LibraryCardPdfRendererFileReader';
import { LibraryCardPdfRenderer } from '@repo/library-card/LibraryCardPdfRenderer';
import { BarcodeGeneratorImpl } from '@repo/barcode-generator-impl/BarcodeGeneratorImpl';
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
  const generateLibraryCard = new GenerateLibraryCard(new BarcodeGeneratorImpl(), pdfRenderer);
  return generateLibraryCard.generate({ name, barcode });
};
