import { useState } from 'react';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import { IconButton, Link, Menu, MenuItem, Typography } from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';
import {Link as Lien} from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@mui/material';
import {useDarkMode} from 'usehooks-ts';

export interface BurgerMenuProp {
    project: Boolean
}

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
    },
    menupaper: {
        backgroundColor: theme.palette.mode === 'dark' ? '#010513' : '#FFFFFF'
    },
    icon: {
      fontSize: "70px"
    }
  }));

export const BurgerMenu: React.FC<BurgerMenuProp> = (project) => {
const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { isDarkMode} = useDarkMode()
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    console.log(anchorEl);
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className={classes.icon}
      >
        {isDarkMode ? <LunchDiningIcon  fontSize="inherit"/> : <LunchDiningIcon sx={{color:"#000"}} fontSize="inherit"/>}
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        classes={{ paper: classes.menupaper }}
      >
        <MenuItem onClick={handleClose}>
            <Scroll to="home" smooth>
            <Lien onClick={handleClose} className={classes.customLink} style={{ textDecoration: 'none'}} to={project ? "/" : ""}>
              <Typography>
                <Link underline="none" color="inherit" className={classes.toolbarLink}>
                  Home
                </Link>
              </Typography>
            </Lien>
          </Scroll>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Scroll to="Project-Selector" smooth>
            <Lien onClick={handleClose} className={classes.customLink} style={{ textDecoration: 'none'}} to={project ? "/" : ""}>
              <Typography>
                <Link underline="none" color="inherit" className={classes.toolbarLink}>
                  Work
                </Link>
              </Typography>
            </Lien>
          </Scroll>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Scroll to="about" smooth>
            <Lien onClick={handleClose} className={classes.customLink} style={{ textDecoration: 'none'}} to={project ? "/" : ""}>
            <Typography>
              <Link underline="none" color="inherit" className={classes.toolbarLink}>
                About
              </Link>
            </Typography>
            </Lien>
          </Scroll>
        </MenuItem>
        <MenuItem>
        <Scroll to="contact" smooth>
          <Lien onClick={handleClose} className={classes.customLink} style={{ textDecoration: 'none'}} to={project ? "/" : ""}>
          <Typography>
            <Link underline="none" color="inherit" className={classes.toolbarLink}>
              Contact
            </Link>
          </Typography>
          </Lien>
          </Scroll>
        </MenuItem>
      </Menu>
    </div>
  );
}
