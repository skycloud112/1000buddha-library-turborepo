import { useState } from 'react';
import { base64ToPdfObjectUrl } from '../../utils/convertUtil.ts';
import { useCreateLibraryCardMutation } from './useCreateLibraryCardMutation.ts';

export function useCreateLibraryCard() {
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const { mutateAsync, isPending } = useCreateLibraryCardMutation();

  const handleCreate = async (params: { name: string; barcode: string }) => {
    try {
      const base64 = await mutateAsync(params);
      const url = base64ToPdfObjectUrl(base64);
      window.open(url);
      handleSuccess();
    } catch {
      handleError();
    }
  };

  function handleSuccess() {
    setSuccess('Successfully created library card. Please check the downloaded file.');
    setError('');
  }

  function handleError() {
    setError('Create library card failed.');
    setSuccess('');
  }

  return {
    handleCreate,
    isLoading: isPending,
    error,
    success,
  };
}
