import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const defaultTheme = createMuiTheme({
  typography: { useNextVariants: true },
});

export default {
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    primary: {
      main: '#baaa92',
      contrastText: '#fff',
    },
  },
};
