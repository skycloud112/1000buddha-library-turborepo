import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { useRouter } from 'next/navigation';
import { Pages } from '../../pages.ts';

export const SideMenuButton = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (open: boolean) => () => setOpen(open);

  return (
    <>
      <IconButton color='inherit' onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <List>
          <MenuItem onClose={toggleDrawer(false)} href={Pages.BOOKS} title={'Books'} />
          <MenuItem
            onClose={toggleDrawer(false)}
            href={Pages.LIBRARY_CARDS}
            title={'Library Cards'}
          />
          <MenuItem onClose={toggleDrawer(false)} href={Pages.NOTES} title={'Notes'} />
        </List>
      </Drawer>
    </>
  );
};

const MenuItem = ({
  onClose,
  href,
  title,
}: {
  onClose: () => void;
  href: string;
  title: string;
}) => {
  const router = useRouter();

  return (
    <ListItem>
      <ListItemButton
        onClick={() => {
          onClose();
          router.push(href);
        }}
      >
        {title}
      </ListItemButton>
    </ListItem>
  );
};
