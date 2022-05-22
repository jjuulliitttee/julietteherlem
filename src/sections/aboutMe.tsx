import { styled, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";
import { Grid, Stack, Theme } from "@mui/material";
import { Box } from "@mui/system"
import aboutMePic from "../assets/aboutMe.png"
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { BootstrapButton } from "../components/MyButton";

export interface AboutMeProp {}

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
  aboutMeDesc: {
    fontFamily: "Corbel_bold, sans-serif",
    fontWeight: 700,
    fontSize: "1.85vh",
    width: "75%",
    lineHeight: "2.222vh",
  },
  interestText: {
    fontFamily: "Corbel_bold, sans-serif",
    fontWeight: 700,
    fontSize: "1.85vh",
    lineHeight: "2.222vh",
  }
}));

export const AboutMe: React.FC<AboutMeProp> = () => {
  const classes = useStyles();
  return (
  <div
    id="about"
    className={classes.root}
  >
    <Box
        paddingLeft="7vw"
        paddingRight="7vw"
        paddingTop="15.37vh"
        paddingBottom="21.38vh"
        width="100%"
        display="flex"
        flexDirection="row"
    >
      <Stack direction="column" spacing={1}>
        <Typography variant="body1" style={{marginBottom:"1.20vh", lineHeight:"6.01vh"}}>
          About me
        </Typography>
        <Typography variant="subtitle1" style={{marginBottom:"5.46vh"}}>
          UI/UX Designer
        </Typography>
        <Typography className={classes.aboutMeDesc} style={{marginBottom:"5.46vh"}}>
        I'm a multidisciplinary digital designer, based in France, 
focused on UI/UX design and graphic design.
        </Typography>
        <Grid container>
          <Grid container item spacing={2}>
            <Grid item>
              <SchoolSharpIcon fontSize="large" sx={{color: "#5FE46C"}}/>
            </Grid>
            <Grid item>
              <Typography className={classes.interestText}>
                Actually in my last year completing a Master's degree in Media Design.
              </Typography>
            </Grid>
          </Grid>
          <Grid container item spacing={2}>
            <Grid item>
              <SchoolSharpIcon fontSize="large" sx={{color: "#5FE46C"}}/>
            </Grid>
            <Grid item>
                <Typography className={classes.interestText}>
                  Diploma in Animation and Illustration (Master).
                </Typography>
            </Grid>
          </Grid>
          <Grid container item spacing={2}>
            <Grid item>
              <SchoolSharpIcon fontSize="large" sx={{color: "#5FE46C"}}/>
            </Grid>
            <Grid item>
                <Typography className={classes.interestText}>
                  Bachelor's degree in interaction design
                </Typography>
            </Grid>
          </Grid>
          <Grid container item spacing={2}>
            <Grid item>
              <FavoriteSharpIcon fontSize="large" sx={{color: "#F35A50"}}/>
            </Grid>
            <Grid item>
                <Typography style={{width:"75%"}} className={classes.interestText}>
                  Passionate about character design, digital art, animation and video game.
                </Typography>
            </Grid>
          </Grid>
        </Grid>
        <BootstrapButton
            style={{backgroundColor: "#FF9345", marginTop:"10.09vh"}}
            variant="contained"
            onClick={() => {
              const link = document.createElement("a");
              link.download = `portfolio-Juliette-Herlem.pdf`;
              link.href = "./cvporfolio.pdf";
              link.click();
            }}
          >
            Download CV
        </BootstrapButton>
      </Stack>
      <Img alt="aboutme" src={aboutMePic} style={{maxWidth:"43.8vw", maxHeight: "67.777vh"}}/>
    </Box>
  </div>
)}