import { useContext } from "react";
import GridLayout, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import { DeleteIconButton } from "../components";
import { SettingsContext, useActions } from "../../../tools";
import { useRowHeight } from "../tools";
import { getWidget as Widget } from "../utils";

import styles from "./styles/mainGrid.module.css";

const GridLayoutWithProvider = WidthProvider(GridLayout);

function MainGrid() {
  const { state } = useContext(SettingsContext);
  const { addTempWidget, removeWidgetFromMainGrid } = useActions();

  const buildGridWidgets = () => {
    return state.mainGridData.layout.map((item) => {
      const {
        code,
        data,
        widget: { name, props },
      } = item;

      return (
        <div
          key={code}
          data-grid={data}
          className={
            state.mainGridData.isDraggable ? styles.widgetEdit : styles.widget
          }
        >
          <Widget widgetName={name} widgetProps={props} />
          {name !== "EditSwitch" && name !== "SettingsButton" ? (
            <DeleteIconButton
              handleClick={() => removeWidgetFromMainGrid({ widgetCode: code })}
              handleStyle={styles.icon}
            />
          ) : (
            <></>
          )}
        </div>
      );
    });
  };

  const handleOnDrop = (layout, gridItemDropped) => {
    addTempWidget({ mainGridData: gridItemDropped });
  };

  return (
    <GridLayoutWithProvider
      className={styles.mainGrid}
      cols={state.mainGridData.cols}
      margin={[state.mainGridData.margin, state.mainGridData.margin]}
      rowHeight={useRowHeight({
        gridCols: state.mainGridData.cols,
        gridMargin: state.mainGridData.margin,
      })}
      compactType={null}
      autoSize={false}
      isDraggable={state.mainGridData.isDraggable}
      isResizable={state.mainGridData.isDraggable}
      isDroppable
      isBounded
      preventCollision
      onDrop={handleOnDrop}
    >
      {buildGridWidgets()}
    </GridLayoutWithProvider>
  );
}

export default MainGrid;
