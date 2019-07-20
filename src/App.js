import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import './assets/styles/app.sass';
import Routes from './Routes';
import theme from './assets/mui/theme';
import reduxStore from './store';


const App = () => (
  <Provider store={reduxStore}>
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <ToastContainer id="forToast" />
        <Routes />
      </div>
    </MuiThemeProvider>
  </Provider>
);

export default App;
