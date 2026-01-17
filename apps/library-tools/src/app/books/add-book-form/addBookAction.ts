'use server';

import { AddBook, AddBookRequest, AddBookResponse } from '@repo/book/AddBook';
import { DbImpl } from '@repo/db-impl/DbImpl';
import { getPostgresUrl } from '../../../utils/env.ts';
import { ISOToDateConverterImpl } from '@repo/date-converter-impl/ISOToDateConverterImpl';
import { sessionGuard } from '../../../session.ts';

export const addBookAction = async (request: AddBookRequest): Promise<AddBookResponse> => {
  await sessionGuard();
  const isoToDateConverter = new ISOToDateConverterImpl();
  const db = new DbImpl(getPostgresUrl(), isoToDateConverter);
  const addBookUseCase = new AddBook(db);
  return addBookUseCase.execute(request);
};
