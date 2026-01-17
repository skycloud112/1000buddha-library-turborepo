'use server';

import { DbImpl } from '@repo/db/DbImpl';
import { getPostgresUrl } from '../../../utils/env.ts';
import { GenerateSpineLabels } from '@repo/spine-labels/GenerateSpineLabels';
import { SpineLabelsPdfRenderer } from '@repo/spine-labels/SpineLabelsPdfRenderer';
import { EmptyPdfFileReader } from '@repo/pdf-renderer/EmptyPdfFileReader';
import { sessionGuard } from '../../../session.ts';
import { LoggerImpl } from '../../../impls/LoggerImpl.ts';

export async function generateSpineLabelsAction(barcodes: string[]) {
  await sessionGuard();
  const db = new DbImpl(getPostgresUrl());
  const fileReader = new EmptyPdfFileReader();
  const pdfDrawer = new SpineLabelsPdfRenderer(fileReader);
  pdfDrawer.logger = new LoggerImpl();
  const useCase = new GenerateSpineLabels(db, pdfDrawer);
  return useCase.execute(barcodes);
}
