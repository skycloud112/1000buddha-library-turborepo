import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TBookForm } from '../book-form/TBookForm.ts';
import { AddBookErrorCode } from '../../../useCases/AddBookUseCase.ts';
import { useAddBookMutation } from './useAddBookMutation.ts';

export const useAddBookForm = ({
  onAddBookSuccess,
  defaultValues,
  successMessage,
  errorMessage,
}: {
  onAddBookSuccess: () => void;
  defaultValues: TBookForm;
  successMessage: string;
  errorMessage: string;
}) => {
  const methods = useForm<TBookForm>({
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues,
  });
  const { handleSubmit, formState } = methods;
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const { isValid } = formState;
  const { mutateAsync, isPending } = useAddBookMutation();

  const handleSubmitClick = async () => {
    await handleSubmit(handleValid)();
  };

  async function handleValid(data: TBookForm) {
    try {
      const response = await mutateAsync({
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
      if (response.errorCode === AddBookErrorCode.BARCODE_EXISTS) {
        handleError('Barcode already exists.');
        return;
      }
      handleSuccess();
    } catch {
      handleError();
    }
  }

  function handleSuccess() {
    setSuccess(successMessage);
    setError('');
    onAddBookSuccess();
  }

  function handleError(message = errorMessage) {
    setError(message);
    setSuccess('');
  }

  return {
    handleSubmitClick,
    loading: isPending,
    error,
    success,
    methods,
    isValid,
  };
};
