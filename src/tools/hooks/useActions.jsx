import { useContext, useCallback } from "react";

import { SettingsContext } from "../";

function useActions() {
  const { dispatch } = useContext(SettingsContext);

  const overwriteState = useCallback(
    ({ firebaseData }) => {
      dispatch({ type: "overwriteState", value: firebaseData });
    },
    [dispatch]
  );

  const setThemeMode = useCallback(
    ({ themeMode }) => {
      dispatch({ type: "setThemeMode", value: themeMode });
    },
    [dispatch]
  );

  const changeThemeMode = useCallback(() => {
    dispatch({ type: "changeThemeMode" });
  }, [dispatch]);

  const changeVisibiliyWidgetsMenu = useCallback(() => {
    dispatch({ type: "changeVisibiliyWidgetsMenu" });
  }, [dispatch]);

  const changeEditableMainGrid = useCallback(() => {
    dispatch({ type: "changeEditableMainGrid" });
  }, [dispatch]);

  const addTempWidget = useCallback(
    ({ mainGridData }) => {
      dispatch({ type: "addTempWidget", value: mainGridData });
    },
    [dispatch]
  );

  const addWidgetToMainGrid = useCallback(
    ({ widget }) => {
      dispatch({ type: "addWidgetToMainGrid", value: widget });
    },
    [dispatch]
  );

  const removeWidgetFromMainGrid = useCallback(
    ({ widgetCode }) => {
      dispatch({ type: "removeWidgetFromMainGrid", value: widgetCode });
    },
    [dispatch]
  );

  const setBackgroundImage = useCallback(
    ({ backgroundImage }) => {
      dispatch({ type: "setBackgroundImage", value: backgroundImage });
    },
    [dispatch]
  );

  const addToFavoriteImages = useCallback(
    ({ imageSrc, imageAlt, imageUserName, imageUserMedia }) => {
      dispatch({
        type: "addToFavoriteImages",
        value: { imageSrc, imageAlt, imageUserName, imageUserMedia },
      });
    },
    [dispatch]
  );

  const removeImageFromFavoriteImages = useCallback(
    ({ favoriteImageCode }) => {
      dispatch({
        type: "removeImageFromFavoriteImages",
        value: favoriteImageCode,
      });
    },
    [dispatch]
  );

  const addBookmarkBox = useCallback(
    ({
      bookmarkBoxName,
      bookmarkBoxLink,
      bookmarkBoxImageSrc,
      bookmarkBoxDisplay,
    }) => {
      dispatch({
        type: "addBookmarkBox",
        value: {
          bookmarkBoxName,
          bookmarkBoxLink,
          bookmarkBoxImageSrc,
          bookmarkBoxDisplay,
        },
      });
    },
    [dispatch]
  );

  const removeBookmarkBox = useCallback(
    ({ bookmarkBoxCode }) => {
      dispatch({ type: "removeBookmarkBox", value: bookmarkBoxCode });
    },
    [dispatch]
  );

  const addBookmarkDropdownCategory = useCallback(
    ({ bookmarkDropdownCategoryName }) => {
      dispatch({
        type: "addBookmarkDropdownCategory",
        value: bookmarkDropdownCategoryName,
      });
    },
    [dispatch]
  );

  const removeBookmarkDropdownCategory = useCallback(
    ({ bookmarkDropdownCategoryCode }) => {
      dispatch({
        type: "removeBookmarkDropdownCategory",
        value: bookmarkDropdownCategoryCode,
      });
    },
    [dispatch]
  );

  const addBookmarkDropdownLink = useCallback(
    ({
      bookmarkDropdownCategoryName,
      bookmarkDropdownName,
      bookmarkDropdownLink,
    }) => {
      dispatch({
        type: "addBookmarkDropdownLink",
        value: {
          bookmarkDropdownCategoryName,
          bookmarkDropdownName,
          bookmarkDropdownLink,
        },
      });
    },
    [dispatch]
  );

  const removeBookmarkDropdownLink = useCallback(
    ({ bookmarkDropdownCategoryCode, bookmarkDropdownLinkCode }) => {
      dispatch({
        type: "removeBookmarkDropdownLink",
        value: { bookmarkDropdownCategoryCode, bookmarkDropdownLinkCode },
      });
    },
    [dispatch]
  );

  return {
    overwriteState,
    setThemeMode,
    changeThemeMode,
    changeVisibiliyWidgetsMenu,
    changeEditableMainGrid,
    addTempWidget,
    addWidgetToMainGrid,
    removeWidgetFromMainGrid,
    setBackgroundImage,
    addToFavoriteImages,
    removeImageFromFavoriteImages,
    addBookmarkBox,
    removeBookmarkBox,
    addBookmarkDropdownCategory,
    removeBookmarkDropdownCategory,
    addBookmarkDropdownLink,
    removeBookmarkDropdownLink,
  };
}

export default useActions;
