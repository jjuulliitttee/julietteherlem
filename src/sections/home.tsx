import { Box, Grid, makeStyles, styled, Theme, Typography } from '@material-ui/core';
import iconInstagram from '../assets/Group 7.svg'
import iconLinkedin from '../assets/Group 8.svg'
import iconPhone from '../assets/Group.svg'
import iconMail from '../assets/Group-1.svg'
import figmaPic from '../assets/imageintro.png'
import { Link as Scroll } from 'react-scroll';
import { BootstrapButton } from '../components/MyButton';
import { ContactIcon } from '../components/contactIcon';

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
    iconPopover: {
      fontFamily: "Corbel_light, sans-serif",
      fontSize: "13px",
      padding: "10px",
      borderRadius: "25px",
    }
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
                    <ContactIcon
                      alt="linkedin-icon"
                      src={iconLinkedin}
                      size={31.4}
                      link="https://www.linkedin.com/in/juliette-herlem-b4bb03177"
                    >
                    </ContactIcon>
                    <ContactIcon
                      alt="instagram-icon"
                      src={iconInstagram}
                      size={31.4}
                      link="https://www.instagram.com/juliettehrm/"
                    >
                    </ContactIcon>
                    <ContactIcon
                      alt="phon-icon"
                      src={iconPhone}
                      size={31.4}
                    >
                      <Typography className={classes.iconPopover} >+33 782556339</Typography>
                    </ContactIcon>
                    <ContactIcon
                      alt="mail-icon"
                      src={iconMail}
                      size={31.4}
                    >
                      <Typography className={classes.iconPopover} >juliette.herlem@gmail.com</Typography>
                    </ContactIcon>
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