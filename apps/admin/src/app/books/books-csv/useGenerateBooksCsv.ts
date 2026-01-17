import { createCsvBlob, downloadBlob } from './csvUtil.ts';
import { useGenerateBooksCsvMutation } from './useGenerateBooksCsvMutation.ts';

export function useGenerateBooksCsv({
  onError,
  onSuccess,
}: {
  onError: (error: string) => void;
  onSuccess: (message: string) => void;
}) {
  const { mutateAsync, isPending } = useGenerateBooksCsvMutation({ onError });

  const handleGenerateBookCsv = async (bookIds: string[]) => {
    const csvString = await mutateAsync(bookIds);
    const blob = createCsvBlob(csvString);
    downloadBlob(blob, 'books.csv');
    onSuccess('Successfully generated books csv. Please check the downloaded file.');
  };

  return {
    handleGenerateBookCsv,
    isLoading: isPending,
  };
}
