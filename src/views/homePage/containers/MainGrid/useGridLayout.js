import WidgetLoader from "../../tools/WidgetLoader";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function useGridLayout() {
  const [gridLayout, setGridLayout] = useState([
    {
      code: uuidv4(),
      gridItemProps: { x: 20, y: 0, w: 1, h: 1 },
      widget: { widgetName: "SettingsButton" },
    },
  ]);

  const buildGridWidgets = () => {
    return gridLayout.map((item) => {
      const {
        code,
        gridItemProps,
        widget: { widgetName },
      } = item;

      return (
        <div key={code} data-grid={gridItemProps}>
          <WidgetLoader widgetName={widgetName} />
        </div>
      );
    });
  };

  return { buildGridWidgets };
}

export default useGridLayout;
