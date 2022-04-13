import { useReducer } from "react";

import { v4 as uuidv4 } from "uuid";

import { SettingsContext } from "../";
import { getInitialState } from "../../utils";

const reducer = (state, action) => {
  switch (action.type) {
    // case "incrementCols":
    //   if (state.cols < 25) return { ...state, cols: state.cols + 1 };
    //   return state;
    // case "decrementCols":
    //   if (state.cols > 15)
    //     return {
    //       ...state,
    //       cols: state.cols - 1,
    //       gridLayout: state.gridLayout.map(
    //         ({ code, gridItemProps, widget }) => {
    //           const { x, y, w, h } = gridItemProps;
    //           return {
    //             code,
    //             gridItemProps: { x: x - 2, y: y, w: w + 1, h: h + 1 },
    //             widget,
    //           };
    //         }
    //       ),
    //     };
    //   return state;
    // case "incrementMargin":
    //   return { ...state, margin: state.margin + 1 };
    // case "decrementMargin":
    //   return { ...state, margin: state.margin - 1 };
    case "showWidgetsMenu":
      return { ...state, showWidgetsMenu: !state.showWidgetsMenu };
    case "editGridLayout":
      return { ...state, isEditable: !state.isEditable };
    case "addTempWidget":
      return { ...state, tempWidget: action.value };
    case "addWidget":
      const { x, y, w, h } = state.tempWidget;
      return {
        ...state,
        gridLayout: [
          ...state.gridLayout,
          {
            code: uuidv4(),
            gridItemProps: { isDraggable: undefined, x, y, w, h },
            widget: action.value,
          },
        ],
      };
    case "addBookmark":
      const { bookmarkName, bookmarkLink } = action.value;
      return {
        ...state,
        bookmarks: [
          {
            bookmark: {
              bookmarkName: bookmarkName,
              bookmarkLink: bookmarkLink,
            },
          },
        ],
      };
    case "setImage":
      return {
        ...state,
        backgroundImage: action.value,
      };
    default:
      throw new Error();
  }
};

function SettingsContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, getInitialState);

  return (
    <SettingsContext.Provider value={{ state, dispatch }}>
      {children}
    </SettingsContext.Provider>
  );
}

export default SettingsContextProvider;
