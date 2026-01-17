'use server';

import { DbImpl } from '@repo/db/DbImpl';
import { getPostgresUrl } from '../../../../../utils/env.ts';
import { BarcodeStartChar, GenerateNextBarcode } from '@repo/book/GenerateNextBarcode';

export const getNextBarcodeAction = async (barcodeStartChar: BarcodeStartChar) => {
  const db = new DbImpl(getPostgresUrl());
  const generateNextBarcode = new GenerateNextBarcode();
  generateNextBarcode.setDb(db);
  return generateNextBarcode.generate({ barcodeStartChar });
};
