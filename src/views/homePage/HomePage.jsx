import { useCallback, useContext, useEffect } from "react";

import { getDoc, getFirestore, setDoc, doc } from "firebase/firestore";

import { SnackbarProvider } from "notistack";

import { SettingsContext, useActions } from "../../tools";
import { Background, MainGrid, WidgetsMenu } from "./containers";
import { getFirestoreInitializer } from "../../utils";

import styles from "./homePage.module.css";

const firestore = getFirestore(getFirestoreInitializer);

function HomePage({ userEmail }) {
  const { state } = useContext(SettingsContext);
  const { changeVisibiliyWidgetsMenu, overwriteState } = useActions();
  const { themeMode, mainGridData, images, bookmarks, searchEngines } = state;

  let email = userEmail;

  useEffect(() => {
    return () => {
      const manageDocument = async () => {
        const docRef = doc(firestore, `users/${email}`);
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
      if (email) {
        manageDocument();
      }
    };
  }, []);

  email = null;

  const handleCloseWidgetsMenu = useCallback(() => {
    if (state.isVisibleWidgetsMenu) {
      changeVisibiliyWidgetsMenu();
    }
  }, [changeVisibiliyWidgetsMenu, state.isVisibleWidgetsMenu]);

  return (
    <SnackbarProvider maxSnack={3}>
      <div
        onClick={handleCloseWidgetsMenu}
        className={
          state.isVisibleWidgetsMenu ? styles.maskActive : styles.maskInactive
        }
      >
        <Background>
          <MainGrid />
        </Background>
      </div>
      <WidgetsMenu />
    </SnackbarProvider>
  );
}

export default HomePage;
