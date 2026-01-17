'use server';

import { DbImpl } from '@repo/db-impl/DbImpl';
import { getPostgresUrl } from '../../../utils/env.ts';
import { GenerateBooksCsv } from '@repo/csv/GenerateBooksCsv';
import { CsvGeneratorImpl } from '@repo/csv/CsvGeneratorImpl';
import { sessionGuard } from '../../../session.ts';

export async function generateBooksCsvAction(bookIds: string[]) {
  await sessionGuard();
  const db = new DbImpl(getPostgresUrl());
  const csvGenerator = new CsvGeneratorImpl();
  const generateBooksCsvUseCase = new GenerateBooksCsv(db, csvGenerator);
  const csvString = await generateBooksCsvUseCase.execute(bookIds);
  return csvString;
}
