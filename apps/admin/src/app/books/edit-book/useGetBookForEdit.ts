import { useMutation } from '@tanstack/react-query';
import { getBookAction } from './form/getBookAction.ts';

export const useGetBookForEdit = ({ onError }: { onError: (error: string) => void }) => {
  return useMutation({
    mutationFn: async (bookId: string) => {
      return getBookAction({ bookId });
    },
    onError: () => {
      onError('Edit book action failed.');
    },
  });
};
