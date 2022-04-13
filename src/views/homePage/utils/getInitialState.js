import { v4 as uuidv4 } from "uuid";

const getInitialState = {
  showWidgetsMenu: false,
  isEditable: false,
  cols: 20,
  margin: 10,
  backgroundImage: "",
  gridLayout: [
    {
      code: uuidv4(),
      gridItemProps: { x: 0, y: 0, w: 1, h: 1 },
      widget: { widgetName: "EditSwitch", props: "" },
    },
    {
      code: uuidv4(),
      gridItemProps: { x: 20, y: 0, w: 1, h: 1 },
      widget: { widgetName: "SettingsButton", props: "" },
    },
    {
      code: uuidv4(),
      gridItemProps: { x: 6, y: 5, w: 8, h: 1 },
      widget: {
        widgetName: "SearchInput",
        props: { variant: "filled", label: "Buscar...", icon: true },
      },
    },
    {
      code: uuidv4(),
      gridItemProps: { x: 6, y: 6, w: 8, h: 5 },
      widget: { widgetName: "Bookmarks", props: "" },
    },
  ],
  tempWidget: { x: 0, y: 0, w: 0, h: 0 },
  bookmarks: [
    {
      bookmark: {
        bookmarkName: "Youtube",
        bookmarkLink: "https://www.youtube.com/",
      },
    },
  ],
};

export default getInitialState;
