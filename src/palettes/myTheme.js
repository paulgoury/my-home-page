import { createTheme } from "@mui/material";
import { pink, teal } from "@mui/material/colors";

const myTheme = createTheme({
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

export default myTheme;
