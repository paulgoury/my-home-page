import { useContext, useEffect, useState } from "react";
import GridLayout, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { v4 as uuidv4 } from "uuid";
import MyContext from "../tools/MyContext";
import WidgetLoader from "../tools/WidgetLoader";

const GridLayoutWithProvider = WidthProvider(GridLayout);

const getWindowDimensions = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

const gridCols = 20;
const gridMargin = 10;

function MainGrid() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const { isEditable, setIsEditable } = useContext(MyContext);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const buildGridLayout = () => {
    const layout = defaultGridLayout.map((item) => {
      const { id, gridProps } = item;

      return { i: id, ...gridProps };
    });

    return layout;
  };

  const buildGridWidgets = () => {
    const layout = defaultGridLayout.map((item) => {
      const {
        id,
        widget: { widgetName },
      } = item;

      return <div key={id}>{<WidgetLoader widgetName={widgetName} />}</div>;
    });

    return layout;
  };

  const getGridLayout = () => {
    const savedLayout = localStorage.getItem("grid-layout");

    return savedLayout ? JSON.parse(savedLayout) : buildGridLayout;
  };

  const handleLayoutChange = (defaultLayout) => {
    localStorage.setItem("grid-layout", JSON.stringify(defaultLayout));
  };

  const defaultGridLayout = [
    {
      id: uuidv4(),
      gridProps: { x: gridCols, y: 0, w: 1, h: 1 },
      widget: { widgetName: "SettingsButton" },
    },
  ];

  return (
    <GridLayoutWithProvider
      className="grid-container"
      layout={getGridLayout()}
      cols={gridCols}
      margin={[gridMargin, gridMargin]}
      rowHeight={windowDimensions.width / gridCols - gridMargin * 2}
      compactType={null}
      autoSize={false}
      // isDraggable={}
      // isResizable={}
      isDroppable
      isBounded
      // onDrop={handleDrop}
      onLayoutChange={handleLayoutChange}
    >
      {buildGridWidgets(defaultGridLayout)}
    </GridLayoutWithProvider>
  );
}

export default MainGrid;
