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
import { Link as Scroll } from 'react-scroll';
import { BootstrapButton } from './components/MyButton';

export interface HomeProp {}

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    minidth: '100%',
    minHeight: '100%',
  });

const useStyles = makeStyles((theme: Theme) => ({
    root: {
      minHeight: "100vh",
    },
  }));

export const Home: React.FC<HomeProp> = () => {
    const classes = useStyles();
    return (
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
                      <BootstrapButton style={{backgroundColor: "#5FE46C", marginTop:"150px", }} variant="contained">
                        Get in touch !
                      </BootstrapButton>
                    </Scroll>
                  </Grid>
                </Grid>
              <Grid item xs={7}>
                  <Img alt="figma-pic" src={figmaPic} width={926} height={602}/>
              </Grid>
            </Grid>
          </Box>
    )}