import { useState } from 'react';
import { BookResponse } from '../../../useCases/BookResponse.ts';
import { useGetBookForEdit } from './useGetBookForEdit.ts';

export const useEditBookClick = ({ onError }: { onError: (error: string) => void }) => {
  const [bookToEdit, setBookToEdit] = useState<BookResponse | null>(null);
  const [openEditBookDialog, setOpenEditBookDialog] = useState(false);

  const { mutateAsync: getBook, isPending: loadingBookToEdit } = useGetBookForEdit({ onError });

  const handleEditBookClick = async (bookId: string) => {
    const { book } = await getBook(bookId);
    setBookToEdit(book);
    setOpenEditBookDialog(true);
  };

  const handleCloseEditBookDialog = () => {
    setOpenEditBookDialog(false);
  };

  return {
    bookToEdit,
    loadingBookToEdit,
    handleEditBookClick,
    openEditBookDialog,
    handleCloseEditBookDialog,
  };
};
