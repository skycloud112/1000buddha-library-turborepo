import { base64ToPdfObjectUrl } from '../../../utils/convertUtil.ts';
import { useGenerateBarcodeLabelsMutation } from './useGenerateBarcodeLabelsMutation.ts';

export function useGenerateBarcodeLabels({
  onError,
  onSuccess,
}: {
  onError: (error: string) => void;
  onSuccess: (message: string) => void;
}) {
  const { mutateAsync, isPending } = useGenerateBarcodeLabelsMutation({ onError });

  const handleGenerateBarcodeLabels = async (bookIds: string[]) => {
    const base64 = await mutateAsync(bookIds);
    const url = base64ToPdfObjectUrl(base64);
    window.open(url);
    onSuccess('Successfully generated barcode labels pdf. Please check the downloaded file.');
  };

  return {
    handleGenerateBarcodeLabels,
    isLoading: isPending,
  };
}
