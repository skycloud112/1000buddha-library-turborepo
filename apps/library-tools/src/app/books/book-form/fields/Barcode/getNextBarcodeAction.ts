'use server';

import { DbImpl } from '@repo/db/DbImpl';
import { getPostgresUrl } from '../../../../../utils/env.ts';
import {
  BarcodeStartChar,
  GenerateNextBarcodeUseCase,
} from '../../../../../useCases/GenerateNextBarcodeUseCase/GenerateNextBarcodeUseCase.ts';

export const getNextBarcodeAction = async (barcodeStartChar: BarcodeStartChar) => {
  const db = new DbImpl(getPostgresUrl());
  const generateNextBarcode = new GenerateNextBarcodeUseCase();
  generateNextBarcode.setDb(db);
  return generateNextBarcode.generate({ barcodeStartChar });
};
