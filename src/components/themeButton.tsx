import { IconButton, makeStyles } from '@material-ui/core';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {useDarkMode} from 'usehooks-ts';


const useStyles = makeStyles({
  button: {
     paddingTop: "29px"
  }
})

export function ThemeButton(){
  const classes = useStyles();

  const { isDarkMode, toggle} = useDarkMode()


  
  return (
    <IconButton onClick={toggle} className={classes.button}>
      {isDarkMode ? <Brightness7Icon/> : <Brightness4Icon sx={{color:"#000"}}/>}
    </IconButton>
  );
}