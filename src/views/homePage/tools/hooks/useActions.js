import { useContext } from "react";

import { SettingsContext } from "..";

function useActions() {
  const { state, dispatch } = useContext(SettingsContext);

  const showWidgetsMenu = () => {
    dispatch({ type: "showWidgetsMenu" });
  };

  const editGridLayout = () => {
    dispatch({ type: "editGridLayout" });
  };

  return { showWidgetsMenu, editGridLayout };
}

export default useActions;
