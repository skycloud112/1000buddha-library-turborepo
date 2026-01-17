import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TBookForm } from '../../book-form/TBookForm.ts';
import { useEditBookMutation } from './useEditBookMutation.ts';

export const useEditBookForm = ({
  defaultValues,
  onEditBookSuccess,
  bookId,
}: {
  defaultValues: TBookForm;
  onEditBookSuccess: () => void;
  bookId: string;
}) => {
  const methods = useForm<TBookForm>({
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues,
  });
  const { handleSubmit, formState } = methods;
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const { isValid, isLoading: isFormLoading } = formState;
  const { mutateAsync, isPending } = useEditBookMutation();

  const handleSubmitClick = async () => {
    await handleSubmit(handleValid)();
  };

  async function handleValid(data: TBookForm) {
    try {
      await mutateAsync({
        id: bookId,
        barcode: data.barcode,
        title: data.title,
        category: data.category,
        classificationNumber: data.classificationNumber,
        authorNumber: data.authorNumber,
        yearPublished: data.yearPublished,
        copyNumber: data.copyNumber,
        author: data.author,
        placeOfPublication: data.placeOfPublication,
        publisher: data.publisher,
      });
      handleSuccess();
    } catch {
      handleError();
    }
  }

  function handleSuccess() {
    setSuccess('Successfully saved book.');
    setError('');
    onEditBookSuccess();
  }

  function handleError() {
    setError('Save book failed.');
    setSuccess('');
  }

  return {
    handleSubmitClick,
    loading: isFormLoading || isPending,
    error,
    success,
    methods,
    isValid,
  };
};
