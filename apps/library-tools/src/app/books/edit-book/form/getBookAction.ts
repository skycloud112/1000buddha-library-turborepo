'use server';

import { DbImpl } from '@repo/db/DbImpl';
import { getPostgresUrl } from '../../../../utils/env.ts';
import { GetBook, GetBookRequest, GetBookResponse } from '../../../../useCases/GetBook.ts';
import { ResponseConverterImpl } from '../../../../useCases/ResponseConverterImpl.ts';

export async function getBookAction(request: GetBookRequest): Promise<GetBookResponse> {
  const db = new DbImpl(getPostgresUrl());
  const converter = new ResponseConverterImpl();
  const useCase = new GetBook(db, converter);
  return useCase.execute(request);
}
