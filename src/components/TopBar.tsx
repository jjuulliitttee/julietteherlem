import { AppBar, Box, CssBaseline, styled, Toolbar, Link, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useLocation} from "react-router";
import { Link as Scroll } from 'react-scroll';
import {Link as Lien} from 'react-router-dom';
import { ThemeButton } from "./themeButton";
import { Theme } from "@mui/material";
import { BurgerMenu } from "./menuBurger";

export interface TopBarProp {}

const StyledToolbar = styled(Toolbar)({
  alignItems: 'flex-end',
  height: '9.1vh',
  paddingLeft: '7vw',
  paddingRight: '7vw'
});

const useStyles = makeStyles((theme: Theme) => ({
  toolbarLink: {
      fontSize: '2.04vh',
      fontWeight: 500,
    '&:hover': {
      fontWeight: 700
   },
  },
  customLink: {
    color: theme.palette.mode === 'dark' ? 'white' : 'black'
  }
}));

export const TopBar: React.FC<TopBarProp> = () => {
    const classes = useStyles();
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.up('lg'))
    const match = useLocation();
    const project = Boolean(match.pathname !==  "/");
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
          <ThemeButton/>
          {mobile ? <Box 
            sx={{minWidth:"26.04vw", display:"flex", justifyContent:"space-evenly"}}
          >
          <Scroll to="home" smooth>
            <Lien className={classes.customLink} style={{ textDecoration: 'none'}} to={project ? "/" : ""}>
              <Typography>
                <Link underline="hover" color="inherit" className={classes.toolbarLink}>
                  Home
                </Link>
              </Typography>
            </Lien>
          </Scroll>
          <Scroll to="Project-Selector" smooth>
            <Lien className={classes.customLink} style={{ textDecoration: 'none'}} to={project ? "/" : ""}>
              <Typography>
                <Link underline="hover" color="inherit" className={classes.toolbarLink}>
                  Work
                </Link>
              </Typography>
            </Lien>
          </Scroll>
          <Scroll to="about" smooth>
            <Lien className={classes.customLink} style={{ textDecoration: 'none'}} to={project ? "/" : ""}>
            <Typography>
              <Link underline="hover" color="inherit" className={classes.toolbarLink}>
                About
              </Link>
            </Typography>
            </Lien>
          </Scroll>
          <Scroll to="contact" smooth>
          <Lien className={classes.customLink} style={{ textDecoration: 'none'}} to={project ? "/" : ""}>
          <Typography>
            <Link underline="hover" color="inherit" className={classes.toolbarLink}>
              Contact
            </Link>
          </Typography>
          </Lien>
          </Scroll>
          </Box> : 
          <BurgerMenu
            project
          />}
        </StyledToolbar>
      </AppBar>
      </CssBaseline>
    );
  };
  