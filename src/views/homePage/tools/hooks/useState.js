import { useContext } from "react";

import { SettingsContext } from "..";

function useState() {
  const { state } = useContext(SettingsContext);

  const {
    showWidgetsMenu,
    isEditable,
    tab,
    cols,
    margin,
    backgroundImage,
    gridLayout,
  } = state;

  const getWidgetMenu = () => {
    return showWidgetsMenu;
  };

  const getIsEditable = () => {
    return isEditable;
  };

  return { getWidgetMenu, getIsEditable };
}

export default useState;
