'use client';
/** createTheme only works on the client side **/

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type {} from '@mui/lab/themeAugmentation';
import { ReactNode } from 'react';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
    MuiLoadingButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
  },
});

export const MuiProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={lightTheme}>
        <>{children}</>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};
