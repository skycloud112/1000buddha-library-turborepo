import CssBaseline from '@mui/material/CssBaseline';
import { MuiProvider } from '../components/MuiProvider.tsx';
import { ReactQueryProvider } from '../components/ReactQueryProvider.tsx';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin={'anonymous'} />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap'
        />
        <title>1000 Buddha Library Tools</title>
      </head>
      <body>
        <ReactQueryProvider>
          <MuiProvider>
            <CssBaseline />
            {children}
          </MuiProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
