import { useMutation } from '@tanstack/react-query';
import { addBookAction } from './addBookAction.ts';
import { AddBookRequest } from '../../../useCases/AddBookUseCase.ts';

export const useAddBookMutation = () => {
  return useMutation({
    mutationFn: async (request: AddBookRequest) => {
      return addBookAction(request);
    },
  });
};
