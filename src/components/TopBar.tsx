import { AppBar, Box, CssBaseline, styled, Toolbar, Link, Typography, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link as Scroll } from 'react-scroll';


import { ThemeButton } from "./themeButton";

/*const theme = createTheme({
  Link: {
    body1: {
      fontFamily: 'Red Hat Display, sans-serif',
      fontWeight: 500,
    },
    button: {
      fontStyle: 'italic',
    },
  },
});*/


export interface TopBarProp {}


const StyledToolbar = styled(Toolbar)({
  alignItems: 'flex-end',
  height: 96,
  paddingLeft: 135,
  paddingRight: 135
});

const useStyles = makeStyles({
  toolbarLink: {
      fontSize: '22px',
      fontWeight: 500,
    '&:hover': {
      fontWeight: 700
   }
  }
})

export const TopBar: React.FC<TopBarProp> = () => {
    const classes = useStyles();

    return (
      <CssBaseline>
      <AppBar
        color="primary"
        elevation={0}
        position="static"
      >
        <StyledToolbar>
            <Typography>
              <Link underline="none" color="inherit" variant="subtitle2">
                  Jh.
              </Link>
            </Typography>
          <Box sx={{ flexGrow: 1 }}/>
          <Box 
            sx={{minWidth:"500px", display:"flex", justifyContent:"space-evenly"}}
          >
          <ThemeButton/>
          <Scroll to="home" smooth>
          <Typography>
            <Link underline="hover" color="inherit" className={classes.toolbarLink}>
              Home
            </Link>
          </Typography>
          </Scroll>
          <Scroll to="Project-Selector" smooth>
            <Typography>
              <Link underline="hover" color="inherit" className={classes.toolbarLink}>
                Work
              </Link>
            </Typography>
          </Scroll>
          <Scroll to="about" smooth>
          <Typography>
            <Link underline="hover" color="inherit" className={classes.toolbarLink}>
              About
            </Link>
          </Typography>
          </Scroll>
          <Scroll to="contact" smooth>
          <Typography>
            <Link underline="hover" color="inherit" className={classes.toolbarLink}>
              Contact
            </Link>
          </Typography>
          </Scroll>
          </Box>
        </StyledToolbar>
      </AppBar>
      </CssBaseline>
    );
  };
  