'use server';

import { BarcodeLabelPdfRenderer } from '../../../useCases/GenerateBarcodeLabelsUseCase/BarcodeLabelPdfRenderer';
import { GenerateBarcodeLabelsUseCase } from '../../../useCases/GenerateBarcodeLabelsUseCase/GenerateBarcodeLabelsUseCase';
import { EmptyPdfFileReader } from '@repo/pdf-renderer/EmptyPdfFileReader';
import { DbImpl } from '@repo/db/DbImpl';
import { getPostgresUrl } from '../../../utils/env.ts';
import { sessionGuard } from '../../../session.ts';
import { LoggerImpl } from '../../../impls/LoggerImpl.ts';

export async function generateBarcodeLabelsAction(bookIds: string[]) {
  await sessionGuard();
  const fileReader = new EmptyPdfFileReader();
  const pdfRenderer = new BarcodeLabelPdfRenderer(fileReader);
  pdfRenderer.logger = new LoggerImpl();
  const db = new DbImpl(getPostgresUrl());
  const useCase = new GenerateBarcodeLabelsUseCase(db, pdfRenderer);
  return useCase.execute(bookIds);
}
