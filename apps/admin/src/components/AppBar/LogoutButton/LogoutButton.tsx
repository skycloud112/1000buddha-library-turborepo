import IconButton from '@mui/material/IconButton';
import Logout from '@mui/icons-material/Logout';
import { logoutAction } from './logoutAction.ts';
import { useRouter } from 'next/navigation';
import { Pages } from '../../../pages.ts';

export const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await logoutAction();
    router.push(Pages.LOGIN);
  };

  return (
    <IconButton color='inherit' onClick={handleLogout}>
      <Logout />
    </IconButton>
  );
};
