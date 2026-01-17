import { useMutation } from '@tanstack/react-query';
import { getBookAction } from '../edit-book/form/getBookAction.ts';

export const useGetBookForCopy = ({ onError }: { onError: (error: string) => void }) => {
  return useMutation({
    mutationFn: async (bookId: string) => {
      return getBookAction({ bookId });
    },
    onError: () => {
      onError('Copy book action failed.');
    },
  });
};
