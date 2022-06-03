import { v4 as uuidv4 } from "uuid";

import { darkTheme, lightTheme } from "../palettes";

const getInitialState = {
  theme: darkTheme,
  isVisibleWidgetsMenu: false,
  mainGridData: {
    isDraggable: false,
    cols: 20,
    margin: 10,
    tempItemLayoutData: { x: 0, y: 0, w: 0, h: 0 },
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
      {
        code: uuidv4(),
        data: { x: 0, y: 0, w: 20, h: 1 },
        widget: { name: "BookmarksDropdown", props: {} },
      },
    ],
  },
  images: {
    backgroundImage: "",
    favoriteImages: [],
  },
  bookmarks: {
    bookmarksBox: [
      {
        code: uuidv4(),
        name: "Youtube",
        link: "https://www.youtube.com/",
        image: "",
        display: "name",
      },
      {
        code: uuidv4(),
        name: "Twitter",
        link: "https://twitter.com/",
        image: "https://api.faviconkit.com/twitter.com/64",
        display: "image",
      },
    ],
    bookmarksDropdown: [
      {
        code: uuidv4(),
        categoryName: "Stream",
        bookmarks: [
          {
            code: uuidv4(),
            name: "Netflix",
            link: "https://www.netflix.com/browse",
          },
          {
            code: uuidv4(),
            name: "Prime Video",
            link: "https://www.netflix.com/browse",
          },
        ],
      },
      {
        code: uuidv4(),
        categoryName: "Work",
        bookmarks: [
          {
            code: uuidv4(),
            name: "React",
            link: "https://www.netflix.com/browse",
          },
          {
            code: uuidv4(),
            name: "Css",
            link: "https://www.netflix.com/browse",
          },
        ],
      },
    ],
  },
  searchEngies: {
    default: "https://www.google.com/search?q=",
    // others: [
    //   { google: "https://www.google.com/search?q=" },
    //   { duckduckgo: " https://duckduckgo.com/?q" },
    //   { youtube: "https://www.youtube.com/results?search_query=" },
    //   { bing: "https://www.bing.com/search?q=" },
    // ],
  },
};

export default getInitialState;
