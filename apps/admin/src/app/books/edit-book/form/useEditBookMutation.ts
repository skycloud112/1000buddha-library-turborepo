import { useMutation } from '@tanstack/react-query';
import { editBookAction } from './editBookAction.ts';
import { UpdateBookRequest } from '../../../../useCases/UpdateBookUseCase.ts';

export const useEditBookMutation = () => {
  return useMutation({
    mutationFn: async (request: UpdateBookRequest) => {
      return editBookAction(request);
    },
  });
};
