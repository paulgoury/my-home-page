import { useReducer } from "react";

import { v4 as uuidv4 } from "uuid";

import { SettingsContext } from "../";
import { ThemeData } from "../../styles";
import { getInitialData } from "../../utils";

const reducer = (state, action) => {
  switch (action.type) {
    case "overwriteState":
      return action.value;
    case "setThemeMode":
      return {
        ...state,
        themeData: ThemeData({ themeMode: action.value }),
      };
    case "changeThemeMode":
      return {
        ...state,
        themeMode: state.themeMode === "dark" ? "light" : "dark",
      };
    case "changeVisibiliyWidgetsMenu":
      return {
        ...state,
        isVisibleWidgetsMenu: !state.isVisibleWidgetsMenu,
      };
    case "changeEditableMainGrid":
      return {
        ...state,
        mainGridData: {
          ...state.mainGridData,
          isDraggable: !state.mainGridData.isDraggable,
        },
      };
    case "addTempWidget":
      return {
        ...state,
        mainGridData: {
          ...state.mainGridData,
          tempItemLayoutData: action.value,
        },
      };
    case "addWidgetToMainGrid":
      const { x, y, w, h } = state.mainGridData.tempItemLayoutData;
      const { widgetName, widgetProps } = action.value;

      let width = w;
      let height = h;

      switch (widgetName) {
        case "BookmarksBox":
          width = 5;
          height = 4;
          break;
        case "BookmarksDropdown":
          width = 10;
          height = 2;
          break;
        case "SearchInput":
          width = 5;
          height = 2;
          break;

        default:
          break;
      }

      return {
        ...state,
        mainGridData: {
          ...state.mainGridData,
          layout: [
            ...state.mainGridData.layout,
            {
              code: uuidv4(),
              data: { isDraggable: undefined, x, y, width, height },
              widget: { name: widgetName, props: widgetProps },
            },
          ],
        },
      };
    case "removeWidgetFromMainGrid":
      return {
        ...state,
        mainGridData: {
          ...state.mainGridData,
          layout: state.mainGridData.layout.filter((item) => {
            return item.code !== action.value;
          }),
        },
      };
    case "setBackgroundImage":
      return {
        ...state,
        images: {
          ...state.images,
          backgroundImage: `${action.value}?blur=80`,
        },
      };
    case "addToFavoriteImages":
      const { imageSrc, imageAlt, imageUserName, imageUserMedia } =
        action.value;

      return {
        ...state,
        images: {
          ...state.images,
          favoriteImages: [
            ...state.images.favoriteImages,
            {
              code: uuidv4(),
              src: imageSrc,
              alt: imageAlt,
              userName: imageUserName,
              userMedia: imageUserMedia,
            },
          ],
        },
      };
    case "removeImageFromFavoriteImages":
      return {
        ...state,
        images: {
          ...state.images,
          favoriteImages: state.images.favoriteImages.filter((item) => {
            return item.code !== action.value;
          }),
        },
      };
    case "addBookmarkBox":
      const {
        bookmarkBoxName,
        bookmarkBoxLink,
        bookmarkBoxImageSrc,
        bookmarkBoxDisplay,
      } = action.value;

      return {
        ...state,
        bookmarks: {
          ...state.bookmarks,
          bookmarksBox: [
            ...state.bookmarks.bookmarksBox,
            {
              code: uuidv4(),
              name: bookmarkBoxName,
              link: bookmarkBoxLink,
              image: bookmarkBoxImageSrc,
              display: bookmarkBoxDisplay,
            },
          ],
        },
      };
    case "removeBookmarkBox":
      return {
        ...state,
        bookmarks: {
          ...state.bookmarks,
          bookmarksBox: state.bookmarks.bookmarksBox.filter((item) => {
            return item.code !== action.value;
          }),
        },
      };
    case "addBookmarkDropdownCategory":
      return {
        ...state,
        bookmarks: {
          ...state.bookmarks,
          bookmarksDropdown: [
            ...state.bookmarks.bookmarksDropdown,
            {
              categoryName: action.value,
              bookmarks: [],
            },
          ],
        },
      };
    case "removeBookmarkDropdownCategory":
      return {
        ...state,
        bookmarks: {
          ...state.bookmarks,
          bookmarksDropdown: state.bookmarks.bookmarksDropdown.filter(
            (item) => {
              return item.code !== action.value;
            }
          ),
        },
      };
    case "addBookmarkDropdownLink":
      const {
        bookmarkDropdownCategoryName,
        bookmarkDropdownName,
        bookmarkDropdownLink,
      } = action.value;

      return {
        ...state,
        bookmarks: {
          ...state.bookmarks,
          bookmarksDropdown: state.bookmarks.bookmarksDropdown.map((item) => {
            if (item.categoryName === bookmarkDropdownCategoryName) {
              const newBookmarks = [
                ...item.bookmarks,
                {
                  name: bookmarkDropdownName,
                  link: bookmarkDropdownLink,
                },
              ];
              return {
                ...item,
                bookmarks: newBookmarks,
              };
            }
            return item;
          }),
        },
      };
    case "removeBookmarkDropdownLink":
      const { bookmarkDropdownCategoryCode, bookmarkDropdownLinkCode } =
        action.value;

      return {
        ...state,
        bookmarks: {
          ...state.bookmarks,
          bookmarksDropdown: state.bookmarks.bookmarksDropdown.map((item) => {
            if (item.code === bookmarkDropdownCategoryCode) {
              return {
                ...item,
                bookmarks: item.bookmarks.filter((_item) => {
                  return _item.code !== bookmarkDropdownLinkCode;
                }),
              };
            }
            return item;
          }),
        },
      };
    default:
      throw new Error();
  }
};

function SettingsContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, getInitialData);
  return (
    <SettingsContext.Provider value={{ state, dispatch }}>
      {children}
    </SettingsContext.Provider>
  );
}

export default SettingsContextProvider;
