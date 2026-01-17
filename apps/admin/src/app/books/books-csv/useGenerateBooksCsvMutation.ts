import { useMutation } from '@tanstack/react-query';
import { generateBooksCsvAction } from './generateBooksCsvAction.ts';

export const useGenerateBooksCsvMutation = ({ onError }: { onError: (error: string) => void }) => {
  return useMutation({
    mutationFn: async (bookIds: string[]) => {
      return generateBooksCsvAction(bookIds);
    },
    onError: () => {
      onError('Generate books csv failed.');
    },
  });
};
