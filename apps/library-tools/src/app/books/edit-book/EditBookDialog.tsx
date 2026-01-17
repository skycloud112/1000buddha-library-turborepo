import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Close from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { EditBookForm } from './form/EditBookForm.tsx';
import List from '@mui/material/List';
import { BookResponse } from '@repo/book/BookResponse';

export function EditBookDialog({
  open,
  onClose,
  bookToEdit,
  onEditBookSuccess,
}: {
  open: boolean;
  onClose: () => void;
  bookToEdit: BookResponse;
  onEditBookSuccess: () => void;
}) {
  return (
    <Dialog open={open} onClose={onClose} fullScreen>
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton edge='start' color='inherit' onClick={onClose} aria-label='close'>
            <Close />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
            Edit Book
          </Typography>
        </Toolbar>
      </AppBar>
      <List sx={{ p: 2 }}>
        <EditBookForm bookToEdit={bookToEdit} onEditBookSuccess={onEditBookSuccess} />
      </List>
    </Dialog>
  );
}
