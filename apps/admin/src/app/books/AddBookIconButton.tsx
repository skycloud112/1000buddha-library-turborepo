import IconButton from '@mui/material/IconButton';
import Add from '@mui/icons-material/Add';

export function AddBookIconButton({ onClick }: { onClick: () => void }) {
  return (
    <IconButton onClick={onClick}>
      <Add />
    </IconButton>
  );
}
