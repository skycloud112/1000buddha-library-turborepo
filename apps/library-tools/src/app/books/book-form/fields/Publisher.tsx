import { useController } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { TBookForm } from '../TBookForm.ts';

export const Publisher = () => {
  const { field, fieldState } = useController<TBookForm>({
    name: 'publisher',
    defaultValue: '',
  });

  return (
    <TextField
      label='Publisher 出版社'
      value={field.value}
      onChange={field.onChange}
      error={!!fieldState.error}
      helperText={fieldState.error?.message}
    />
  );
};
