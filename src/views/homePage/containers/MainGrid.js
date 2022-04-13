import { useContext } from "react";
import GridLayout, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import { SettingsContext, useGridLayout, useRowHeight } from "../tools";

import "./styles/mainGrid.css";

const GridLayoutWithProvider = WidthProvider(GridLayout);

function MainGrid() {
  const { state } = useContext(SettingsContext);

  const { buildGridWidgets, addTempWidget } = useGridLayout();

  const handleOnDrop = (layout, gridItemDropped, event) => {
    addTempWidget({ gridItem: gridItemDropped });
  };

  return (
    <GridLayoutWithProvider
      className="main-grid"
      cols={state.cols}
      margin={[state.margin, state.margin]}
      rowHeight={useRowHeight({
        gridCols: state.cols,
        gridMargin: state.margin,
      })}
      compactType={null}
      autoSize={false}
      isDraggable={state.isEditable}
      isResizable={state.isEditable}
      isDroppable
      isBounded
      onDrop={handleOnDrop}
      // onLayoutChange={}
    >
      {buildGridWidgets()}
    </GridLayoutWithProvider>
  );
}

export default MainGrid;
