import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Close from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { AddBookForm } from '../add-book-form/AddBookForm.tsx';
import List from '@mui/material/List';
import { DEFAULT_VALUES } from './defaultValues.ts';

export function AddBookDialog({
  open,
  onClose,
  onAddBookSuccess,
}: {
  open: boolean;
  onClose: () => void;
  onAddBookSuccess: () => void;
}) {
  return (
    <Dialog open={open} onClose={onClose} fullScreen>
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton edge='start' color='inherit' onClick={onClose} aria-label='close'>
            <Close />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
            Add a New Book
          </Typography>
        </Toolbar>
      </AppBar>
      <List sx={{ p: 2 }}>
        <AddBookForm
          onAddBookSuccess={onAddBookSuccess}
          defaultValues={DEFAULT_VALUES}
          successMessage={'Successfully added book.'}
          errorMessage={'Add book failed.'}
        />
      </List>
    </Dialog>
  );
}
