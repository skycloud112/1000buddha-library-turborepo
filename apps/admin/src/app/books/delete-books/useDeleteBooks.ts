import { useDeleteBooksMutation } from './useDeleteBooksMutation.ts';

export function useDeleteBooks({
  onError,
  onSuccess,
}: {
  onError: (error: string) => void;
  onSuccess: (message: string) => void;
}) {
  const { mutateAsync, isPending } = useDeleteBooksMutation({ onError });

  const handleDeleteBooks = async (bookIds: string[]) => {
    const confirmed = window.confirm('Are you sure you want to delete the selected books?');
    if (!confirmed) {
      return;
    }
    await mutateAsync(bookIds);
    onSuccess('Successfully deleted selected books.');
  };

  return {
    handleDeleteBooks,
    isLoading: isPending,
  };
}
