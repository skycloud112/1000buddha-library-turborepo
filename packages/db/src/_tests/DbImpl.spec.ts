import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest';
import { DbImpl } from '../DbImpl';
import { Book } from '@repo/entities/Book';
import { TEST_DB_CONNECTION_STRING } from '../TEST_DB_CONNECTION_STRING';

describe('DbImpl', () => {
  let db: DbImpl;

  beforeAll(async () => {
    db = new DbImpl(TEST_DB_CONNECTION_STRING);
    await db.initBookTable();
  });

  beforeEach(async () => {
    await db.deleteAllBooks();
  });

  afterAll(async () => {
    await db.disconnect();
  });

  it('there a book, should return the book', async () => {
    await db.createBook(createBookStub('B0'));
    const book = await db.getLastBookWithBarcodeStartChar('B');
    expect(book!.barcode).toBe('B0');
  });

  it('there are many books, should return the last book based on barcode', async () => {
    await db.createBook(createBookStub('B0'));
    await db.createBook(createBookStub('B1'));
    await db.createBook(createBookStub('B2'));
    await db.createBook(createBookStub('B3'));
    const book = await db.getLastBookWithBarcodeStartChar('B');
    expect(book!.barcode).toBe('B3');
  });

  it('when no books found with the barcode start character, should return null', async () => {
    const book = await db.getLastBookWithBarcodeStartChar('B');
    expect(book).toBeNull();
  });
});

const createBookStub = (barcode: string) => {
  return new Book(
    barcode,
    barcode,
    'test',
    'test',
    'category',
    'classificationNumber',
    'authorNumber',
    'author',
    'yearPublished',
    'placeOfPublication',
    'publisher',
    new Date(),
  );
};
