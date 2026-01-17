import { useMutation } from '@tanstack/react-query';
import { createLibraryCardAction } from './createLibraryCardAction.ts';

export const useCreateLibraryCardMutation = () => {
  return useMutation({
    mutationFn: async (params: { name: string; barcode: string }) => {
      return createLibraryCardAction(params);
    },
  });
};
