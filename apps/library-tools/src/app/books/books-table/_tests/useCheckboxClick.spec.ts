import { describe, it, expect } from 'vitest';
import { createNewSelectedForShiftClick } from '../useCheckboxClick.ts';
import { BookResponse } from '../../../../useCases/BookResponse.ts';

describe('createNewSelectedForShiftClick', () => {
  it('when first book is selected and shift click on the third book, should select all 3 books', () => {
    const selected: string[] = ['1'];
    const books = [{ id: '1' }, { id: '2' }, { id: '3' }] as BookResponse[];
    const targetRowIndex = 2;
    const newSelected = createNewSelectedForShiftClick(selected, books, targetRowIndex);
    expect(newSelected).toEqual(['1', '2', '3']);
  });
});
