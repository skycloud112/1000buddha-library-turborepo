import { useMutation } from '@tanstack/react-query';
import { deleteBooksAction } from './deleteBooksAction.ts';

export const useDeleteBooksMutation = ({ onError }: { onError: (error: string) => void }) => {
  return useMutation({
    mutationFn: async (bookIds: string[]) => {
      return deleteBooksAction(bookIds);
    },
    onError: () => {
      onError('Delete books failed.');
    },
  });
};
