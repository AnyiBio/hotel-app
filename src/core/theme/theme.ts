import merge from 'lodash.merge';
import {
  createTheme,
  Theme as DefaultTheme,
  PaletteColor,
} from '@mui/material';

const defaultTheme = createTheme({
  palette: {
    primary: {
      light: '#4a8089',
      main: '#e0e6e9',
      dark: '#662484',
    },
    secondary: {
      light: '#fff584',
      main: '#d6c254',
      dark: '#a29223',
    },
    success: {
      main: '#43a047',
    },
    info: {
      main: '#1976d2',
    },
    warning: {
      main: '#ffa000',
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#1c2323',
          '&.Mui-selected': {
            color: '#1c2323',
            textDecoration: 'underline',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          color: '#1c2323',
          '&.Mui-selected': {
            color: '#1c2323',
            textDecoration: 'underline',
          },
        },
      },
    },
  },
});

type Theme = DefaultTheme & {
  palette: {
    primary: PaletteColor;
    secondary: PaletteColor;
    success: PaletteColor;
    info: PaletteColor;
    warning: PaletteColor;
    table: {
      row: PaletteColor;
    };
  };
};

export const theme: Theme = merge(defaultTheme, {
  palette: {
    table: {
      row: {
        main: '#ddd',
      },
    },
  },
} as Theme);
