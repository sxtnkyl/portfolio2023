import { convertHexToRgbOpacity } from '@/utils/convertHexToRgbOpacity';
import { createTheme, responsiveFontSizes } from '@mui/material';

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#364c56',
      },
      secondary: {
        main: '#33F1D2',
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
            input: {
              '&:focus': {
                background: `${convertHexToRgbOpacity({
                  hex: '#33F1D2',
                  opacity: '0.3',
                })}`,
              },
              '&:-webkit-autofill': {
                WebkitBoxShadow: `0 0 0 100px ${convertHexToRgbOpacity({
                  hex: '#33F1D2',
                  opacity: '0.3',
                })} inset`,
                WebkitTextFillColor: 'default',
              },
            },
          },
        },
      },
    },
  })
);

export default theme;
