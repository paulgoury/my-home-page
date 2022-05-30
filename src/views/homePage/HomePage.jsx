import { useCallback, useContext } from "react";

import { SnackbarProvider } from "notistack";

import { SettingsContext, useActions } from "./tools";
import { Background, MainGrid, WidgetsMenu } from "./containers";

import styles from "./homePage.module.css";

function HomePage() {
  const { state } = useContext(SettingsContext);
  const { changeVisibiliyWidgetsMenu } = useActions();

  const handleCloseWidgetsMenu = useCallback(() => {
    if (state.isVisibleWidgetsMenu) {
      changeVisibiliyWidgetsMenu();
    }
  }, [changeVisibiliyWidgetsMenu, state.isVisibleWidgetsMenu]);

  return (
    <SnackbarProvider maxSnack={3} preventDuplicate>
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
