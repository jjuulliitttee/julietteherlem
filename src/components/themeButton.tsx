import { IconButton, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import Moon from '../assets/Moon.svg';
import Sun from '../assets/Sun.svg';
import {useDarkMode} from 'usehooks-ts';

const useStyles = makeStyles({
  button: {
     paddingTop: "2.68vh"
  }
})

export function ThemeButton(){
  const classes = useStyles();
  const { isDarkMode, toggle} = useDarkMode()
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'))
  const size = desktop ? {width: "2.1vw", height:"3.5vh"} : {width:"70px"}

  return (
    <IconButton onClick={toggle} className={classes.button}>
      {isDarkMode ? <img alt="sun" src={Sun} style={size}/> : <img alt='moon' src={Moon} style={size}/>}
    </IconButton>
  );
}