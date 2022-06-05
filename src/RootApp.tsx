import { Box, ThemeProvider} from '@material-ui/core';
import { TopBar } from './components/TopBar';
import { useDarkMode } from 'usehooks-ts';
import { createTheme } from '@mui/material/styles';
import { ProjectSelector } from './sections/projectSelector';
import { AboutMe } from './sections/aboutMe';
import { ContactMe } from './sections/contactMe';
import { Home } from './sections/home';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { ProjectPage } from './components/project';

function RootApp() {
  const {isDarkMode} = useDarkMode();

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#071030',
      },
      background: {
        default: '#071030'
      }
    },
    typography: {
      fontFamily: 'Red Hat Display, sans-serif',
      body2: {
        fontFamily: 'Corbel, sans-serif',
        fontWeight: 'normal'
      },
      body1: {
        fontWeight: 900,
        fontSize: '4.44vh',
        lineHeight: '6.11vh',
      },
      subtitle1: {
        fontWeight: 'bold',
        fontSize: '2.31vh'
      },
      subtitle2: {
        fontWeight: 'bold',
        fontSize: '3.33vh'
      }
    },
    })
  const lightTheme = createTheme({
     palette: {
       mode: 'light',
       primary: {
           main: '#FFFFFF',
         },
       },
       typography: {
        fontFamily: 'Red Hat Display, sans-serif',
        body2: {
          fontFamily: 'Corbel, sans-serif',
          fontWeight: 'normal'
        },
        body1: {
          fontWeight: 900,
          fontSize: '4.44vh',
          lineHeight: '6.11vh',
        },
        subtitle1: {
          fontWeight: 'bold',
          fontSize: '2.31vh'
        },
        subtitle2: {
          fontWeight: 'bold',
          fontSize: '3.33vh'
        }
      },
   })  

  return (
    <ThemeProvider theme={isDarkMode? darkTheme: lightTheme}>
        <Box minHeight="100vh" overflow="hidden">
          <BrowserRouter basename="/jherlem">
          <TopBar/>
            <Switch>
              <Route path="/project/:id">
                <ProjectPage/>
              </Route>
              <Route path="/">
                <Home/>
                <ProjectSelector/>
                <AboutMe/>
                <ContactMe/>
              </Route>
            </Switch>
          </BrowserRouter>
        </Box>
    </ThemeProvider>
  );
}

export default RootApp;
