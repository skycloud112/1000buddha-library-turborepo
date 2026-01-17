import { useState } from 'react';
import { BookResponse } from '../../../useCases/BookResponse.ts';
import { BookSearchInitialOption } from './InitialOption.ts';
import { useSearchBooksMutation } from './useSearchBooksMutation.ts';

export function useSearchBooks({
  onError,
  initialValues,
  onSearchSuccess,
  onSearchClickSuccess,
}: {
  onError: (error: string) => void;
  initialValues: {
    totalBookCount: number;
    currentPageBooks: BookResponse[];
  };
  onSearchSuccess: () => void;
  onSearchClickSuccess: () => void;
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPageBooks, setCurrentPageBooks] = useState<BookResponse[]>(
    initialValues.currentPageBooks,
  );
  const [page, setPage] = useState(BookSearchInitialOption.PAGE);
  const [pageSize, setPageSize] = useState(BookSearchInitialOption.PAGE_SIZE);
  const [totalBookCount, setTotalBookCount] = useState(initialValues.totalBookCount);

  const { mutateAsync, isPending } = useSearchBooksMutation({ onError });

  const handleSearchClick = async () => {
    setPage(BookSearchInitialOption.PAGE);
    const response = await mutateAsync({
      searchTerm,
      page: BookSearchInitialOption.PAGE,
      pageSize,
    });
    setCurrentPageBooks(response.currentPageBooks);
    setTotalBookCount(response.totalBookCount);
    onSearchClickSuccess();
  };

  const search = async ({
    searchTerm,
    page,
    pageSize,
  }: {
    searchTerm: string;
    page: number;
    pageSize: number;
  }) => {
    const response = await mutateAsync({ searchTerm, page, pageSize });
    setCurrentPageBooks(response.currentPageBooks);
    setTotalBookCount(response.totalBookCount);
    onSearchSuccess();
  };

  const handleClearClick = async () => {
    setSearchTerm(BookSearchInitialOption.SEARCH_TERM);
    setPage(BookSearchInitialOption.PAGE);
    await search({
      searchTerm: BookSearchInitialOption.SEARCH_TERM,
      page: BookSearchInitialOption.PAGE,
      pageSize,
    });
  };

  const reSearch = async () => {
    await search({ searchTerm, page, pageSize });
  };

  const handleChangePageClick = async (newPage: number) => {
    setPage(newPage);
    await search({ searchTerm, page: newPage, pageSize });
  };

  const handleChangeRowsPerPageClick = async (newPageSize: number) => {
    setPageSize(newPageSize);
    await search({ searchTerm, page, pageSize: newPageSize });
  };

  const handleSearchTermChange = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  return {
    handleClearClick,
    currentPageBooks,
    isLoading: isPending,
    searchTerm,
    handleSearchTermChange,
    reSearch,
    handleChangePageClick,
    handleChangeRowsPerPageClick,
    handleSearchClick,
    page,
    pageSize,
    totalBookCount,
  };
}
