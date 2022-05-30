import { useContext, useEffect, useRef } from "react";
import SettingsContext from "../context/SettingsContext";
import useActions from "./useActions";

function useComponentVisible() {
  const { state } = useContext(SettingsContext);
  const { changeVisibiliyWidgetsMenu } = useActions();
  const ref = useRef(state.ref);

  const isVisible = state.isVisibleWidgetsMenu;

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      changeVisibiliyWidgetsMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, !isVisible);

    return () => {
      document.removeEventListener("click", handleClickOutside, !isVisible);
    };
  });

  return { ref, isVisible, changeVisibiliyWidgetsMenu };
}

export default useComponentVisible;
