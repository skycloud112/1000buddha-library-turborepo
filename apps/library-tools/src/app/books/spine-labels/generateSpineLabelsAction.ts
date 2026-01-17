'use server';

import { DbImpl } from '@repo/db/DbImpl';
import { getPostgresUrl } from '../../../utils/env.ts';
import { GenerateSpineLabelsUseCase } from '../../../useCases/GenerateSpineLabelsUseCase/GenerateSpineLabelsUseCase';
import { SpineLabelsPdfRenderer } from '../../../useCases/GenerateSpineLabelsUseCase/SpineLabelsPdfRenderer';
import { EmptyPdfFileReader } from '@repo/pdf-renderer/EmptyPdfFileReader';
import { sessionGuard } from '../../../session.ts';
import { LoggerImpl } from '../../../impls/LoggerImpl.ts';

export async function generateSpineLabelsAction(barcodes: string[]) {
  await sessionGuard();
  const db = new DbImpl(getPostgresUrl());
  const fileReader = new EmptyPdfFileReader();
  const pdfDrawer = new SpineLabelsPdfRenderer(fileReader);
  pdfDrawer.logger = new LoggerImpl();
  const useCase = new GenerateSpineLabelsUseCase(db, pdfDrawer);
  return useCase.execute(barcodes);
}
