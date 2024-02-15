import { Box, ThemeProvider} from '@material-ui/core';
import { TopBar } from './components/TopBar';
import { useDarkMode } from 'usehooks-ts';
import { createTheme } from '@mui/material/styles';
import { ProjectSelector } from './sections/projectSelector';
import { AboutMe } from './sections/aboutMe';
import { ContactMe } from './sections/contactMe';
import { Home } from './sections/home';
import { HashRouter, Route, Routes} from 'react-router-dom';
import { ProjectPage } from './components/project';

const App = () => {
  return (
    <>
      <Home/>
      <ProjectSelector/>
      <AboutMe/>
      <ContactMe/>
    </>
  )
}

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
          <HashRouter>
          <TopBar/>
            <Routes>
              <Route path="/project/:id" element={<ProjectPage/>}/>
              <Route path="/" element={<App/>}/>
            </Routes>
          </HashRouter>
        </Box>
    </ThemeProvider>
  );
}

export default RootApp;
