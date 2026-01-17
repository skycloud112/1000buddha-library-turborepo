import { useMutation } from '@tanstack/react-query';
import { searchBooksAction } from './searchBooksAction.ts';

export const useSearchBooksMutation = ({ onError }: { onError: (error: string) => void }) => {
  return useMutation({
    mutationFn: async (params: { searchTerm: string; page: number; pageSize: number }) => {
      return searchBooksAction(params);
    },
    onError: () => {
      onError('Search failed.');
    },
  });
};
