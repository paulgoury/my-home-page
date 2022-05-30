import { createTheme } from "@mui/material";

const simpleDarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3f7cb5",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#303030",
      // paper: "transparent",
      paper: "#424242",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
  shadows: {
    1: "0px 0px 5px 0px rgba(0,0,0,0.3)",
  },
});

export default simpleDarkTheme;
