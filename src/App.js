import { useContext, useEffect } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import { ThemeProvider } from "@mui/material/styles";

import { SettingsContext, useActions } from "./tools";
import MyAuthentication from "./views/auth/MyAuthentication";
import HomePage from "./views/homepage/HomePage";
import { ThemeData } from "./styles";
import { getFirestoreInitializer } from "./utils";

import styles from "./app.module.css";

const auth = getAuth(getFirestoreInitializer);

function App() {
  const { state } = useContext(SettingsContext);
  const { manageUser } = useActions();

  useEffect(() => {
    return () => {
      onAuthStateChanged(auth, (firebaseUser) => {
        firebaseUser
          ? manageUser({ userEmail: firebaseUser.email })
          : manageUser({ userEmail: null });
      });
    };
  }, []);

  return (
    <ThemeProvider
      theme={ThemeData({ themeMode: state ? state.themeMode : "dark" })}
    >
      <div className={styles.appContainer}>
        {state.user ? (
          <HomePage userEmail={state.user} />
        ) : (
          <MyAuthentication />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
