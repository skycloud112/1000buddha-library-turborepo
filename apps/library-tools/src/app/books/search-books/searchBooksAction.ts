'use server';

import { DbImpl } from '@repo/db/DbImpl';
import { SearchBooks, SearchBooksResponse } from '../../../useCases/SearchBooks.ts';
import { getPostgresUrl } from '../../../utils/env.ts';
import { ResponseConverterImpl } from '../../../useCases/ResponseConverterImpl.ts';
import { sessionGuard } from '../../../session.ts';

export async function searchBooksAction({
  searchTerm,
  page,
  pageSize,
}: {
  searchTerm: string;
  page: number;
  pageSize: number;
}): Promise<SearchBooksResponse> {
  await sessionGuard();
  const db = new DbImpl(getPostgresUrl());
  const responseConverter = new ResponseConverterImpl();
  const useCase = new SearchBooks(db, responseConverter);
  return useCase.execute({ searchTerm, page, pageSize });
}
