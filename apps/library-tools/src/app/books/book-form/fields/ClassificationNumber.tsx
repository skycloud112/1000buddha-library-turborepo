import { useController } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { TBookForm } from '../TBookForm.ts';

export const ClassificationNumber = () => {
  const { field, fieldState } = useController<TBookForm>({
    name: 'classificationNumber',
    defaultValue: '',
  });

  return (
    <TextField
      label='Classification Number 分類號'
      value={field.value}
      onChange={field.onChange}
      error={!!fieldState.error}
      helperText={fieldState.error?.message}
    />
  );
};
