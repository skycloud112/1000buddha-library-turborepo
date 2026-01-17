import Typography from '@mui/material/Typography';

export const Title = ({ title }: { title: string }) => {
  return (
    <Typography variant='h6' color='inherit' component='div'>
      {title}
    </Typography>
  );
};
