import { useContext } from "react";

import { SettingsContext } from "../";
import { getWidget as Widget } from "../../utils";

import "../styles/widget.css";

function useGridLayout() {
  const { state, dispatch } = useContext(SettingsContext);

  const buildGridWidgets = () => {
    const { gridLayout } = state;
    return gridLayout.map((item) => {
      const {
        code,
        gridItemProps,
        widget: { widgetName, props },
      } = item;

      return (
        <div key={code} data-grid={gridItemProps} className="widget-container">
          <Widget widgetName={widgetName} props={props} />
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
