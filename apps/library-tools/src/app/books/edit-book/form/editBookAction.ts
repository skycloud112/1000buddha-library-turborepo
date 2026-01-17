'use server';

import { DbImpl } from '@repo/db-impl/DbImpl';
import { getPostgresUrl } from '../../../../utils/env.ts';
import { UpdateBook, UpdateBookRequest } from '@repo/book/UpdateBook';
import { sessionGuard } from '../../../../session.ts';

export async function editBookAction(request: UpdateBookRequest): Promise<void> {
  await sessionGuard();
  const db = new DbImpl(getPostgresUrl());
  const useCase = new UpdateBook(db);
  await useCase.execute(request);
}
