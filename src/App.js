import { useContext } from "react";

import { ThemeProvider } from "@mui/material/styles";

import { SettingsContext } from "./tools";
import MyAuthentication from "./views/auth/MyAuthentication";
import HomePage from "./views/homepage/HomePage";
import { ThemeData } from "./styles";

import styles from "./app.module.css";

function App() {
  const { state } = useContext(SettingsContext);

  return (
    <ThemeProvider
      theme={ThemeData({ themeMode: state ? state.themeMode : "dark" })}
    >
      <div className={styles.appContainer}>
        {state.user ? <HomePage /> : <MyAuthentication />}
      </div>
    </ThemeProvider>
  );
}

export default App;
