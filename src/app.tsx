import React from 'react';
import { StyledEngineProvider } from '@mui/material';
import { RouterComponent } from 'core/router';
import { ThemeProviderComponent } from 'core/theme';
import { AuthProvider } from 'common-app/auth';
import {
  SnackbarComponent,
  SnackbarProvider,
  SpinnerComponent,
} from 'common/components';


const App: React.FunctionComponent = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProviderComponent>
        <AuthProvider>
          <SnackbarProvider>
            <SpinnerComponent />
            <RouterComponent />
            <SnackbarComponent />
          </SnackbarProvider>
        </AuthProvider>
      </ThemeProviderComponent>
    </StyledEngineProvider>
  );
};

export default App;
