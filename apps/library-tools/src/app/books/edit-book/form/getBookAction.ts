'use server';

import { DbImpl } from '@repo/db-impl/DbImpl';
import { getPostgresUrl } from '../../../../utils/env.ts';
import { GetBook, GetBookRequest, GetBookResponse } from '@repo/book/GetBook';
import { ResponseConverterImpl } from '@repo/book/ResponseConverterImpl';

export async function getBookAction(request: GetBookRequest): Promise<GetBookResponse> {
  const db = new DbImpl(getPostgresUrl());
  const converter = new ResponseConverterImpl();
  const useCase = new GetBook(db, converter);
  return useCase.execute(request);
}
