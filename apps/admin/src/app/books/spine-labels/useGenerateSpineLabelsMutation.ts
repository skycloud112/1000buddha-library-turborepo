import { useMutation } from '@tanstack/react-query';
import { generateSpineLabelsAction } from './generateSpineLabelsAction.ts';

export const useGenerateSpineLabelsMutation = ({
  onError,
}: {
  onError: (error: string) => void;
}) => {
  return useMutation({
    mutationFn: async (bookIds: string[]) => {
      return generateSpineLabelsAction(bookIds);
    },
    onError: () => {
      onError('Generate spine labels pdf failed.');
    },
  });
};
