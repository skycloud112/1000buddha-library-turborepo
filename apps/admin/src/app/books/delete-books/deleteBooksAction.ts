'use server';

import { DbImpl } from '@repo/db/DbImpl';
import { getPostgresUrl } from '../../../utils/env.ts';
import { DeleteBooksUseCase } from '../../../useCases/DeleteBooksUseCase.ts';
import { sessionGuard } from '../../../session.ts';

export async function deleteBooksAction(bookIds: string[]) {
  await sessionGuard();
  const db = new DbImpl(getPostgresUrl());
  const useCase = new DeleteBooksUseCase(db);
  return useCase.execute(bookIds);
}
