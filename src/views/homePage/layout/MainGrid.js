import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import GridLayout, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "../homePage.css";
import MyContext from "../tools/MyContext";

const GridLayoutWithProvider = WidthProvider(GridLayout);
const margin = 10;
const cols = 26;
const defaultLayout = [{ i: "edit", x: 26, y: 0, w: 1, h: 1 }];
const getLayout = () => {
  const savedLayout = localStorage.getItem("grid-layout");

  return savedLayout ? JSON.parse(savedLayout) : defaultLayout;
};

const getWindowDimentions = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

const MainGrid = () => {
  const [dimensions, setDimensions] = useState(getWindowDimentions());

  const [layout, setLayout] = useState(getLayout);

  console.log("default:", layout);

  const { edit, setEdit } = useContext(MyContext);

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getWindowDimentions());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleShowWidgetsMenu = () => {
    setEdit(!edit);
  };

  const handleLayoutChange = (defaultLayout) => {
    localStorage.setItem("grid-layout", JSON.stringify(defaultLayout));
  };

  const handleDrop = (layout, item, event) => {
    console.log({ layout, item, event });
    setLayout(layout);
  };

  return (
    <GridLayoutWithProvider
      layout={layout}
      cols={cols}
      rowHeight={dimensions.width / cols - margin * 2}
      compactType={null}
      margin={[margin, margin]}
      onLayoutChange={handleLayoutChange}
      isDraggable={edit === "undefined" || edit === true}
      isResizable={edit === "undefined" || edit === true}
      autoSize={false}
      isBounded={false}
      className="gridLayoutProvider"
      isDroppable={true}
      onDrop={handleDrop}
    >
      {/* array de nodos (dinamic children)*/}
      <IconButton key="edit" onClick={handleShowWidgetsMenu}>
        <Edit />
      </IconButton>
    </GridLayoutWithProvider>
  );
};

export default MainGrid;
