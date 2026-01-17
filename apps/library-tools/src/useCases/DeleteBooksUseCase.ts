import { Db } from '@repo/db/Db';

export class DeleteBooksUseCase {
  constructor(private db: Db) {}

  async execute(bookIds: string[]): Promise<void> {
    await this.db.deleteBooks(bookIds);
  }
}
