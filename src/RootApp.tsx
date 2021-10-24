import { Box, Grid, makeStyles, styled, SvgIcon, Theme, ThemeProvider, Typography } from '@material-ui/core';
import { TopBar } from './components/TopBar';
import { useDarkMode } from 'usehooks-ts';
import { createStyles, createTheme } from '@mui/material/styles';
import { red } from '@material-ui/core/colors';
import iconInstagram from './assets/Group 7.svg'
import iconLinkedin from './assets/Group 8.svg'
import iconPhone from './assets/Group.svg'
import iconMail from './assets/Group-1.svg'
import figmaPic from './assets/imageintro.png'
import ContactButton from './components/ContactButton';
import { ProjectSelector } from './projectSelector';
import { AboutMe } from './aboutMe';
import { ContactMe } from './contactMe';
import { Home } from './home';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { BootstrapButton } from './components/MyButton';
import { ProjectPage } from './components/project';
/*import Corbel from './assets/fonts/corbel.ttf';


const corbel = {
  fontFamily: "Corbel",
  fontStyle: "normal",
  fontWeight: 500,
  src: `
    url(${Corbel}) format('truetype)
  `,
}*/

/*const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      typography: {
        fontFamily: [
          'Red Hat Display',
          'sans-serif'
        ].join(','),
      },
    },
  })
);*/





function RootApp() {
  //const classes = useStyles();
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
        fontSize: '48px'
      },
      subtitle1: {
        fontWeight: 'bold',
        fontSize: '25px'
      },
      subtitle2: {
        fontWeight: 'bold',
        fontSize: '36px'
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
          fontSize: '48px'
        },
        subtitle1: {
          fontWeight: 'bold',
          fontSize: '25px'
        },
        subtitle2: {
          fontWeight: 'bold',
          fontSize: '36px'
        }
      },
   })  

  return (
    <ThemeProvider theme={isDarkMode? darkTheme: lightTheme}>
        <Box minHeight="100vh" overflow="hidden">
          <TopBar/>
          <BrowserRouter>
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
