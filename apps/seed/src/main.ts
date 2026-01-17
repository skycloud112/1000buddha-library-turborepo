import { Logger, Seed } from './Seed';
import { CsvReaderImpl } from './CsvReaderImpl';
import { DbImpl } from '@repo/db/DbImpl';
import { Book } from '@repo/entities/Book';

class LoggerImpl implements Logger {
  logBook(book: Book) {
    console.log(book);
  }
}

async function main() {
  require('dotenv').config();
  let connectionString = process.env.POSTGRES_URL!;
  const db = new DbImpl(connectionString!);
  const reader = new CsvReaderImpl();
  const logger = new LoggerImpl();
  const seed = new Seed(db, reader, logger);
  await seed.execute();
}

main().then(async () => {
  console.log('done');
});
