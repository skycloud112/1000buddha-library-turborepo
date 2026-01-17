import { useState } from 'react';
import { BookResponse } from '../../../useCases/BookResponse.ts';
import { useGetBookForCopy } from './useGetBookForCopy.ts';

export const useCreateCopyClick = ({ onError }: { onError: (error: string) => void }) => {
  const [bookToCopy, setBookToCopy] = useState<BookResponse | null>(null);
  const [openCopyBookDialog, setOpenCopyBookDialog] = useState(false);

  const { mutateAsync: getBook, isPending: loadingBookToCopy } = useGetBookForCopy({ onError });

  const handleCopyBookClick = async (bookId: string) => {
    const { book } = await getBook(bookId);
    setBookToCopy(book);
    setOpenCopyBookDialog(true);
  };

  const handleCloseCopyBookDialog = () => {
    setOpenCopyBookDialog(false);
  };

  return {
    bookToCopy,
    loadingBookToCopy,
    handleCopyBookClick,
    openCopyBookDialog,
    handleCloseCopyBookDialog,
  };
};
