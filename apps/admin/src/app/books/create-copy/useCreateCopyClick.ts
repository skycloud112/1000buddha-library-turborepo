import { useState } from 'react';
import { BookResponse } from '../../../useCases/BookResponse.ts';
import { getBookAction } from '../edit-book/form/getBookAction.ts';

export const useCreateCopyClick = ({ onError }: { onError: (error: string) => void }) => {
  const [bookToCopy, setBookToCopy] = useState<BookResponse | null>(null);
  const [loadingBookToCopy, setLoadingBookToCopy] = useState(false);
  const [openCopyBookDialog, setOpenCopyBookDialog] = useState(false);

  const handleCopyBookClick = async (bookId: string) => {
    try {
      setLoadingBookToCopy(true);
      const { book } = await getBookAction({ bookId });
      handleSuccess(book);
    } catch {
      handleError();
    }
  };

  const handleSuccess = (book: BookResponse) => {
    setLoadingBookToCopy(false);
    setBookToCopy(book);
    setOpenCopyBookDialog(true);
  };

  const handleError = () => {
    onError('Copy book action failed.');
    setLoadingBookToCopy(false);
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
