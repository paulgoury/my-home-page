import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3f7cb5",
      light: "rgb(101, 150, 195)",
      dark: "rgb(44, 86, 126)",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f50057",
      light: "rgb(247, 51, 120)",
      dark: "rgb(171, 0, 60)",
      contrastText: "#fff",
    },
    error: {
      main: "#f44336",
      light: "#e57373",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    warning: {
      main: "#ff9800",
      light: "#ffb74d",
      dark: "#f57c00",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    info: {
      main: "#2196f3",
      light: "#64b5f6",
      dark: "#1976d2",
      contrastText: "#fff",
    },
    success: {
      main: "#4caf50",
      light: "#81c784",
      dark: "#388e3c",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    background: {
      default: "#fafafa",
      paper: "#ffffff",
    },
    divider: {
      main: "rgba(0, 0, 0, 0.12)",
    },
    text: {
      primary: "rgba(0,0,0,0.87)",
      secondary: "rgba(0,0,0,0.54)",
      disabled: "rgba(0,0,0,0.38)",
      hint: "rgba(0,0,0,0.38)",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});

export default lightTheme;
