'use server';

import { DbImpl } from '@repo/db/DbImpl';
import { getPostgresUrl } from '../../../utils/env.ts';
import { DeleteBooks } from '../../../useCases/DeleteBooks.ts';
import { sessionGuard } from '../../../session.ts';

export async function deleteBooksAction(bookIds: string[]) {
  await sessionGuard();
  const db = new DbImpl(getPostgresUrl());
  const useCase = new DeleteBooks(db);
  return useCase.execute(bookIds);
}
