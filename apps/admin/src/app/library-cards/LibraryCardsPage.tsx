'use client';

import { AppBar } from '../../components/AppBar/AppBar.tsx';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import { useCreateLibraryCard } from './useCreateLibraryCard.ts';

export const LibraryCardsPage = () => {
  const [name, setName] = useState('阿彌陀佛');
  const [barcode, setBarcode] = useState('123456');
  const { handleCreate, isLoading, error, success } = useCreateLibraryCard();

  const handleClick = async () => {
    await handleCreate({ name, barcode });
  };

  const enableCreateButton = name && barcode;

  return (
    <>
      <AppBar title={'Library Cards'} />
      <Stack sx={{ p: 2 }} direction={'column'} spacing={1}>
        <TextField label='Name' value={name} onChange={(e) => setName(e.target.value)} />
        <TextField label='Barcode' value={barcode} onChange={(e) => setBarcode(e.target.value)} />
        <LoadingButton loading={isLoading} onClick={handleClick} disabled={!enableCreateButton}>
          Create library card
        </LoadingButton>
        {success && <Alert severity='success'>{success}</Alert>}
        {error && <Alert severity='error'>{error}</Alert>}
      </Stack>
    </>
  );
};
