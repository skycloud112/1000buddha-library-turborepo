import { useMutation } from '@tanstack/react-query';
import { generateBarcodeLabelsAction } from './generateBarcodeLabelsAction.ts';

export const useGenerateBarcodeLabelsMutation = ({
  onError,
}: {
  onError: (error: string) => void;
}) => {
  return useMutation({
    mutationFn: async (bookIds: string[]) => {
      return generateBarcodeLabelsAction(bookIds);
    },
    onError: () => {
      onError('Generate barcode labels pdf failed.');
    },
  });
};
