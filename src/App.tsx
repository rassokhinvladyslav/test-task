import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { UsersList } from './UsersList/UsersList';

export const App = () => {
  return (
    <ThemeProvider theme={createTheme()}>
      <UsersList />
    </ThemeProvider>
  );
};
