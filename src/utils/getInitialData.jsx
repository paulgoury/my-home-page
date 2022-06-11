import { v4 as uuidv4 } from "uuid";

const getInitialData = {
  user: null,
  themeMode: "dark",
  isVisibleWidgetsMenu: false,
  mainGridData: {
    isDraggable: false,
    cols: 20,
    margin: 10,
    tempItemLayoutData: {},
    layout: [
      {
        code: uuidv4(),
        data: { x: 0, y: 0, w: 1, h: 1 },
        widget: { name: "EditSwitch", props: {} },
      },
      {
        code: uuidv4(),
        data: { x: 20, y: 0, w: 1, h: 1 },
        widget: { name: "SettingsButton", props: {} },
      },
      {
        code: uuidv4(),
        data: { x: 6, y: 5, w: 8, h: 1 },
        widget: {
          name: "SearchInput",
          props: { variant: "filled", label: "Buscar...", icon: true },
        },
      },
      {
        code: uuidv4(),
        data: { x: 6, y: 6, w: 8, h: 3 },
        widget: { name: "BookmarksBox", props: {} },
      },
    ],
  },
  images: {
    backgroundImage: "",
    favoriteImages: [],
  },
  bookmarks: {
    bookmarksBox: [],
    bookmarksDropdown: [],
  },
  searchEngies: {
    default: "https://www.google.com/search?q=",
  },
};

export default getInitialData;
