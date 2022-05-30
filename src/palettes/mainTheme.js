import { createTheme } from "@mui/material";
import { pink, teal } from "@mui/material/colors";

const mainTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: teal[600],
    },
    secondary: {
      main: pink[400],
    },
    error: {
      main: "#DB6174",
    },
    background: {
      default: "#303030",
      paper: "#424242",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});

export default mainTheme;
