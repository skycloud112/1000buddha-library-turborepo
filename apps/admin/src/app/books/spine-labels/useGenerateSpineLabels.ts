import { base64ToPdfObjectUrl } from '../../../utils/convertUtil.ts';
import { useGenerateSpineLabelsMutation } from './useGenerateSpineLabelsMutation.ts';

export function useGenerateSpineLabels({
  onError,
  onSuccess,
}: {
  onError: (error: string) => void;
  onSuccess: (message: string) => void;
}) {
  const { mutateAsync, isPending } = useGenerateSpineLabelsMutation({ onError });

  const handleGenerateSpineLabels = async (bookIds: string[]) => {
    const base64 = await mutateAsync(bookIds);
    const url = base64ToPdfObjectUrl(base64);
    window.open(url);
    onSuccess('Successfully generated spine labels pdf. Please check the downloaded file.');
  };

  return {
    handleGenerateSpineLabels,
    isLoading: isPending,
  };
}
