import { createTheme, responsiveFontSizes } from '@mui/material';

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#364c56',
      },
      secondary: {
        main: '#FFC400',
      },
      background: {
        default: '#78909C',
        paper: '#f9fcff',
      },
      text: {
        primary: '#004339',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ':root': {
            'html, body': {
              height: '100dvh',
            },
            '#__next': {
              height: '100dvh',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              'div:not([class])': {
                all: 'inherit',
              },
            },
          },
        },
      },
    },
  })
);

export default theme;
