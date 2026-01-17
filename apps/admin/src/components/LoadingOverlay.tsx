import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export const LoadingOverlay = ({ visible }: { visible: boolean }) => {
  return (
    <Backdrop sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })} open={visible}>
      <CircularProgress color='inherit' />
    </Backdrop>
  );
};
