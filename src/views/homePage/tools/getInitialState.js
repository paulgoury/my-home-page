import { v4 as uuidv4 } from "uuid";

const getInitialState = {
  showWidgetsMenu: false,
  isEditable: false,
  tab: 0,
  cols: 20,
  margin: 10,
  gridLayout: [
    {
      code: uuidv4(),
      gridItemProps: { x: 0, y: 0, w: 1, h: 1 },
      widget: { widgetName: "EditSwitch" },
    },
    {
      code: uuidv4(),
      gridItemProps: { x: 20, y: 0, w: 1, h: 1 },
      widget: { widgetName: "SettingsButton" },
    },
    {
      code: uuidv4(),
      gridItemProps: { x: 6, y: 5, w: 8, h: 1 },
      widget: { widgetName: "SearchTextField" },
    },
  ],
  tempWidget: { x: 0, y: 0, w: 0, h: 0 },
};

export default getInitialState;
