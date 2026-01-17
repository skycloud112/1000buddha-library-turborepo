'use server';

import { BarcodeLabelPdfRenderer } from '@repo/generate-barcode-labels/BarcodeLabelPdfRenderer';
import { GenerateBarcodeLabels } from '@repo/generate-barcode-labels/GenerateBarcodeLabels';
import { EmptyPdfFileReader } from '@repo/pdf-renderer/EmptyPdfFileReader';
import { DbImpl } from '@repo/db/DbImpl';
import { getPostgresUrl } from '../../../utils/env.ts';
import { BarcodeGeneratorImpl } from '@repo/barcode-generator-impl/BarcodeGeneratorImpl';
import { sessionGuard } from '../../../session.ts';
import { LoggerImpl } from '../../../impls/LoggerImpl.ts';

export async function generateBarcodeLabelsAction(bookIds: string[]) {
  await sessionGuard();
  const fileReader = new EmptyPdfFileReader();
  const barcodeGenerator = new BarcodeGeneratorImpl();
  const pdfRenderer = new BarcodeLabelPdfRenderer(fileReader);
  pdfRenderer.logger = new LoggerImpl();
  const db = new DbImpl(getPostgresUrl());
  const useCase = new GenerateBarcodeLabels(db, barcodeGenerator, pdfRenderer);
  return useCase.execute(bookIds);
}
