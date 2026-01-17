'use server';

import { DbImpl } from '@repo/db/DbImpl';
import { getPostgresUrl } from '../../../utils/env.ts';
import { GenerateBooksCsvUseCase } from '../../../useCases/GenerateBooksCsvUseCase/GenerateBooksCsvUseCase';
import { CsvGeneratorImpl } from '../../../useCases/GenerateBooksCsvUseCase/CsvGeneratorImpl';
import { sessionGuard } from '../../../session.ts';

export async function generateBooksCsvAction(bookIds: string[]) {
  await sessionGuard();
  const db = new DbImpl(getPostgresUrl());
  const csvGenerator = new CsvGeneratorImpl();
  const generateBooksCsvUseCase = new GenerateBooksCsvUseCase(db, csvGenerator);
  const csvString = await generateBooksCsvUseCase.execute(bookIds);
  return csvString;
}
