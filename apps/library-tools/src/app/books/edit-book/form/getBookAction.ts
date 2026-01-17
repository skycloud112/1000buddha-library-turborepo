'use server';

import { DbImpl } from '@repo/db/DbImpl';
import { getPostgresUrl } from '../../../../utils/env.ts';
import {
  GetBookUseCase,
  GetBookRequest,
  GetBookResponse,
} from '../../../../useCases/GetBookUseCase.ts';
import { ResponseConverterImpl } from '../../../../useCases/ResponseConverterImpl.ts';

export async function getBookAction(request: GetBookRequest): Promise<GetBookResponse> {
  const db = new DbImpl(getPostgresUrl());
  const converter = new ResponseConverterImpl();
  const useCase = new GetBookUseCase(db, converter);
  return useCase.execute(request);
}
