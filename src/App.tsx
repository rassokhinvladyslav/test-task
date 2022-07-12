import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material'

export const App = () => {
  return <ThemeProvider theme={createTheme()}>page</ThemeProvider>
}
