import { useContext } from "react";

import { getAuth } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";

import { Button, Typography } from "@mui/material";
import { useSnackbar } from "notistack";

import { SettingsContext, useActions } from "../../../tools";
import { getFirestoreInitializer } from "../../../utils";

import styles from "./styles/logoutTab.module.css";

const firestore = getFirestore(getFirestoreInitializer);
const auth = getAuth(getFirestoreInitializer);

function LogoutTab() {
  const { state } = useContext(SettingsContext);
  const { manageUser, changeVisibiliyWidgetsMenu } = useActions();
  const { enqueueSnackbar } = useSnackbar();

  const { themeMode, mainGridData, images, bookmarks, searchEngines } = state;
  const { layout } = mainGridData;

  const manageDocument = async () => {
    const docRef = doc(firestore, `users/${state.user}`);
    await setDoc(docRef, {
      themeMode,
      layout,
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
    manageUser({ userInfo: null });
  };

  const handleClickSaveState = async () => {
    if (state.user) {
      manageDocument();
      enqueueSnackbar("Se han guardado los cambios correctamente", {
        variant: "success",
      });
    } else {
      enqueueSnackbar("No se han podido guardar los cambios", {
        variant: "error",
      });
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.buttonsContainer}>
        <Button
          variant="contained"
          size="large"
          color="success"
          onClick={handleClickSaveState}
        >
          Guardar cambios
        </Button>
        <Button
          variant="contained"
          color="error"
          size="large"
          onClick={handleClickLogout}
        >
          Cerrar Sesión y guardar cambios
        </Button>
      </div>
    </div>
  );
}

export default LogoutTab;
