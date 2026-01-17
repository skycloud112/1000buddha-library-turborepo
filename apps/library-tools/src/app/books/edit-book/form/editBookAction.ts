'use server';

import { DbImpl } from '@repo/db/DbImpl';
import { getPostgresUrl } from '../../../../utils/env.ts';
import { UpdateBookUseCase, UpdateBookRequest } from '../../../../useCases/UpdateBookUseCase.ts';
import { sessionGuard } from '../../../../session.ts';

export async function editBookAction(request: UpdateBookRequest): Promise<void> {
  await sessionGuard();
  const db = new DbImpl(getPostgresUrl());
  const useCase = new UpdateBookUseCase(db);
  await useCase.execute(request);
}
