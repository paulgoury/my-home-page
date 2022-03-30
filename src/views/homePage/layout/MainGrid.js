import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import GridLayout, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "../homePage.css";
import SearchTextField from "../widget/SearchTextField";
import SettingsButton from "../widget/SettingsButton";

const GridLayoutWithProvider = WidthProvider(GridLayout);

const margin = 10;
const cols = 26;

const getWindowDimentions = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

const MainGrid = () => {
  const [dimensions, setDimensions] = useState(getWindowDimentions());

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getWindowDimentions());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const defaultLayout = [
    { i: "edit", x: 26, y: 0, w: 7, h: 1 },
    { i: "1", x: 26, y: 0, w: 7, h: 1 },
  ];

  return (
    <GridLayoutWithProvider
      className="gridLayoutProvider"
      layout={defaultLayout}
      cols={cols}
      margin={[margin, margin]}
      rowHeight={dimensions.width / cols - margin * 2}
      compactType={null}
      autoSize={false}
      isBounded={false}
    >
      <SettingsButton key={"edit"} />
      <div key="1">Testing div 1</div>
    </GridLayoutWithProvider>
  );
};

export default MainGrid;
