import { generateSpineLabelsAction } from './generateSpineLabelsAction.ts';
import { base64ToPdfObjectUrl } from '../../../utils/convertUtil.ts';
import { useState } from 'react';

export function useGenerateSpineLabels({
  onError,
  onSuccess,
}: {
  onError: (error: string) => void;
  onSuccess: (message: string) => void;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateSpineLabels = async (bookIds: string[]) => {
    try {
      setIsLoading(true);
      const base64 = await generateSpineLabelsAction(bookIds);
      const url = base64ToPdfObjectUrl(base64);
      window.open(url);
      handleSuccess();
    } catch {
      handleError();
    }
  };

  function handleSuccess() {
    onSuccess('Successfully generated spine labels pdf. Please check the downloaded file.');
    setIsLoading(false);
  }

  function handleError() {
    onError('Generate spine labels pdf failed.');
    setIsLoading(false);
  }

  return {
    handleGenerateSpineLabels,
    isLoading,
  };
}
