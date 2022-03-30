import { createTheme } from "@mui/material";

const mySimpleThemeLight = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#3f7cb5",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

export default mySimpleThemeLight;
