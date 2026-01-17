import { useController } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { TBookForm } from '../TBookForm.ts';

export const PlaceOfPublication = () => {
  const { field, fieldState } = useController<TBookForm>({
    name: 'placeOfPublication',
    defaultValue: '',
  });

  return (
    <TextField
      label='Place of Publication 出版地'
      value={field.value}
      onChange={field.onChange}
      error={!!fieldState.error}
      helperText={fieldState.error?.message}
    />
  );
};
