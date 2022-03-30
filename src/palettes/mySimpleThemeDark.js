import { createTheme } from "@mui/material";

const mySimpleThemeDark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3f7cb5",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

export default mySimpleThemeDark;
