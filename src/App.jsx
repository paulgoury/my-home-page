import { useContext, useEffect, useState } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import { ThemeProvider } from "@mui/material/styles";

import { SettingsContext } from "./tools";
import MyAuthentication from "./views/auth/MyAuthentication";
import HomePage from "./views/homepage/HomePage";
import { ThemeData } from "./styles";
import { getFirestoreInitializer } from "./utils";

import styles from "./app.module.css";

const auth = getAuth(getFirestoreInitializer);

function App() {
  const [user, setUser] = useState(null);
  const { state } = useContext(SettingsContext);

  useEffect(() => {
    return () => {
      onAuthStateChanged(auth, (firebaseUser) => {
        firebaseUser ? setUser(firebaseUser) : setUser(null);
      });
    };
  }, []);

  return (
    <ThemeProvider
      theme={ThemeData({ themeMode: state ? state.themeMode : "dark" })}
    >
      <div className={styles.appContainer}>
        {user ? <HomePage userEmail={user.email} /> : <MyAuthentication />}
      </div>
    </ThemeProvider>
  );
}

export default App;
