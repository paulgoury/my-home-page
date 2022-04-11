import { useContext } from "react";

import { WidgetLoader, SettingsContext } from "./";

function useGridLayout() {
  const { state, dispatch } = useContext(SettingsContext);

  const buildGridWidgets = () => {
    const { gridLayout } = state;
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

  const addTempWidget = ({ gridItem }) => {
    dispatch({ type: "addTempWidget", value: gridItem });
  };

  const addWidgetToMainGridLayout = ({ widget }) => {
    dispatch({ type: "addWidget", value: widget });
  };

  return { buildGridWidgets, addTempWidget, addWidgetToMainGridLayout };
}

export default useGridLayout;
