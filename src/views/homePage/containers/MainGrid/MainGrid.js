import GridLayout, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import useGridLayout from "./useGridLayout";
import useRowHeight from "./useRowHeight";

const GridLayoutWithProvider = WidthProvider(GridLayout);

const gridCols = 20;
const gridMargin = 10;

function MainGrid() {
  const getRowHeight = useRowHeight({ gridCols, gridMargin });
  const { buildGridWidgets } = useGridLayout();

  const handleDrop = (event) => {
    console.log({ event });
    event.find((element) => {
      if (element.i === "__dropping-elem__") {
        buildGridWidgets();
      }
    });
  };

  // const getLayout

  const handleLayoutChange = () => {};

  return (
    <GridLayoutWithProvider
      className="main-grid"
      cols={gridCols}
      margin={[gridMargin, gridMargin]}
      rowHeight={getRowHeight}
      compactType={null}
      autoSize={false}
      // isDraggable={}
      // isResizable={}
      isDroppable
      isBounded
      onDrop={handleDrop}
      onLayoutChange={handleLayoutChange}
    >
      {buildGridWidgets()}
    </GridLayoutWithProvider>
  );
}

export default MainGrid;
