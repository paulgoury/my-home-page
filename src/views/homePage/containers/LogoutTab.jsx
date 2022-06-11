import { Button, Typography } from "@mui/material";

import { getAuth } from "firebase/auth";
import { getDoc, getFirestore, setDoc, doc } from "firebase/firestore";
import { useContext } from "react";

import { SettingsContext, useActions } from "../../../tools";
import { getFirestoreInitializer } from "../../../utils";

import styles from "./styles/logoutTab.module.css";

const firestore = getFirestore(getFirestoreInitializer);

const auth = getAuth(getFirestoreInitializer);

function LogoutTab() {
  const { state } = useContext(SettingsContext);
  const { manageUser, changeVisibiliyWidgetsMenu, overwriteState } =
    useActions();

  const { themeMode, mainGridData, images, bookmarks, searchEngines } = state;

  const manageDocument = async () => {
    const docRef = doc(firestore, `users/${state.user}`);
    const query = await getDoc(docRef);
    query.exists()
      ? overwriteState({ firebaseData: query.data() })
      : await setDoc(docRef, {
          themeMode,
          mainGridData,
          images,
          bookmarks,
          searchEngines,
        });
  };

  const handleClickLogout = async () => {
    if (state.user) {
      manageDocument();
    }
    changeVisibiliyWidgetsMenu();
    await auth.signOut();
    manageUser({ userEmail: null });
  };

  return (
    <div className={styles.main}>
      <div>
        <Typography variant="h4">
          ¿ Esta seguro que desea cerrar la sesón ?
        </Typography>
      </div>
      <div className={styles.buttonsContainer}>
        <Button variant="contained" color="primary" size="large">
          No
        </Button>
        <Button
          variant="contained"
          size="large"
          color="error"
          onClick={handleClickLogout}
        >
          Si
        </Button>
      </div>
    </div>
  );
}

export default LogoutTab;
