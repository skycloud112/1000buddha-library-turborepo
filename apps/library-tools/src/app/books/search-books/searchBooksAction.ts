'use server';

import { DbImpl } from '@repo/db-impl/DbImpl';
import { SearchBooks, SearchBooksResponse } from '@repo/book/SearchBooks';
import { getPostgresUrl } from '../../../utils/env.ts';
import { ResponseConverterImpl } from '@repo/book/ResponseConverterImpl';
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
