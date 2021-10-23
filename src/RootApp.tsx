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
import { Link as Scroll } from 'react-scroll';
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

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  minidth: '100%',
  minHeight: '100%',
});



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
          <Box
            id="home"
            marginLeft="135px"
            marginRight="135px"
            display="flex"
            justifyContent="flex-start"
            height="926px"
          >
            <Grid container justifyContent="space-between" alignItems="center" direction="row">
                <Grid item  xs={4} container direction="column" spacing={1}>
                  <Grid item>
                      <Typography variant='body1'>
                        Hi, I'm Juliette
                      </Typography>
                  </Grid>
                  <Grid item >
                      <Typography variant='subtitle1' gutterBottom>
                        I’m a UI/UX designer based in France. 
                      </Typography>
                  </Grid>
                  <Grid item container spacing={1}>
                    <Grid item>
                      <img alt="linkedin-logo" src={iconLinkedin} width={31.4} height={31.4}/>
                    </Grid>
                    <Grid item>
                      <img alt="instagram-logo" src={iconInstagram} width={31.4} height={31.4}/>
                    </Grid>
                    <Grid item>
                      <img alt="phone-logo" src={iconPhone} width={31.4} height={31.4}/>
                    </Grid>
                    <Grid item>
                      <img alt="mail-logo" src={iconMail} width={31.4} height={31.4}/>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Scroll to="contact" smooth>
                      <ContactButton/>
                    </Scroll>
                  </Grid>
                </Grid>
              <Grid item xs={7}>
                  <Img alt="figma-pic" src={figmaPic} width={926} height={602}/>
              </Grid>
            </Grid>
          </Box>
          <ProjectSelector/>
          <AboutMe/>
          <ContactMe/>
        </Box>
    </ThemeProvider>
  );
}

export default RootApp;
