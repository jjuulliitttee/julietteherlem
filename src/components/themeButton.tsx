import { IconButton, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
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

  
  return (
    <IconButton onClick={toggle} style={{fontSize:desktop ? "28px" : "70px"}} className={classes.button}>
      {isDarkMode ? <Brightness7Icon fontSize='inherit'/> : <Brightness4Icon fontSize='inherit' sx={{color:"#000"}}/>}
    </IconButton>
  );
}