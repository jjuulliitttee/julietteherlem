import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useDarkMode } from 'usehooks-ts';


export default function AppTheme(props: any) {
  const {isDarkMode} = useDarkMode();

  const darkTheme = createTheme({
    palette: {
      primary: {
          main: '#071030',
        },
      },
    })
  const lightTheme = createTheme({
     palette: {
       primary: {
           main: '#FFFFFF',
         },
       },
   })  

  return (
      <ThemeProvider theme={isDarkMode? darkTheme: lightTheme}>
        {props.children}
      </ThemeProvider>
  );
}