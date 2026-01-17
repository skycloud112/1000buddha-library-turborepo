'use server';

import { AddBook, AddBookRequest, AddBookResponse } from '../../../useCases/AddBook.ts';
import { DbImpl } from '@repo/db/DbImpl';
import { getPostgresUrl } from '../../../utils/env.ts';
import { sessionGuard } from '../../../session.ts';

export const addBookAction = async (request: AddBookRequest): Promise<AddBookResponse> => {
  await sessionGuard();
  const db = new DbImpl(getPostgresUrl());
  const addBookUseCase = new AddBook(db);
  return addBookUseCase.execute(request);
};
