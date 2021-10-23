import { green, orange, red } from "@material-ui/core/colors";
import { ThemeOptions } from "@material-ui/core/styles";
type Status = "sucess" | "danger" | "error";
export const commonThemeOptions: ThemeOptions & {
  status: { [key in Status]: string };
} = {
  status: {
    sucess: green[400],
    danger: orange[400],
    error: red[400]
  },
  overrides: {
    MuiDrawer: {
      paperAnchorDockedLeft: {
        borderRight: 0
      }
    },
    MuiListItemIcon: {
      root: {
        // minWidth: 34
      }
    }
  },
  palette: {
    background: { default: "#fff" },
    primary: {
      main: "#0f70b7"
    },
    secondary: {
      main: "#12a19a"
    }
  },
  typography: {
    htmlFontSize: 18,
    subtitle1: {
      fontWeight: "bold"
    },
    allVariants: {}
  }
};
