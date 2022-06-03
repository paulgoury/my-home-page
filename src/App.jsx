import { useContext } from "react";

import { ThemeProvider } from "@mui/material/styles";

import { SettingsContext } from "./views/homePage/tools";
import { darkTheme, lightTheme } from "./palettes";
import MyAuthentication from "./views/auth/MyAuthentication";
import HomePage from "./views/homePage/HomePage";

import styles from "./app.module.css";

function App() {
  const { state } = useContext(SettingsContext);

  return (
    <ThemeProvider theme={state.theme}>
      <div className={styles.appContainer}>
        {/* <MyAuthentication /> */}
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
