import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Close from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import { BookResponse } from '../../../useCases/BookResponse.ts';
import { AddBookForm } from '../add-book-form/AddBookForm.tsx';
import { getInitialValues } from '../book-form/util.ts';

export function CreateCopyDialog({
  open,
  onClose,
  bookToCopy,
  onCopyBookSuccess,
}: {
  open: boolean;
  onClose: () => void;
  bookToCopy: BookResponse | null;
  onCopyBookSuccess: () => void;
}) {
  return (
    <Dialog open={open} onClose={onClose} fullScreen>
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton edge='start' color='inherit' onClick={onClose} aria-label='close'>
            <Close />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
            Create a Copy
          </Typography>
        </Toolbar>
      </AppBar>
      <List sx={{ p: 2 }}>
        {bookToCopy && (
          <AddBookForm
            onAddBookSuccess={onCopyBookSuccess}
            defaultValues={getInitialValues(bookToCopy)}
            successMessage={'Successfully created a copy of the book.'}
            errorMessage={'Create copy failed.'}
          />
        )}
      </List>
    </Dialog>
  );
}
