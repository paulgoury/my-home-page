import { Tab } from "@mui/material";
import { useContext } from "react";

import { MyTab, MyTabPanel } from "../../components";
import { SettingsContext, useGridLayout } from "../../tools";
import { SearchTextField } from "../../widgets";

import "./widgetsMenu.css";

const WidgetsMenu = () => {
  const { state, dispatch } = useContext(SettingsContext);

  const { addWidgetToMainGridLayout } = useGridLayout();

  const handleTab = (event, newValue) => {
    dispatch({ type: "manageTab", value: newValue });
  };

  const handleWidgetDragLeave = () => {
    dispatch({ type: "showWidgetsMenu" });
  };

  const handleWidgetDragEnd = () => {
    addWidgetToMainGridLayout({ widget: "SearchTextField" });
  };

  // const handleIncrementCols = () => {
  //   dispatch({ type: "incrementCols" });
  // };

  // const handleDecrementCols = () => {
  //   dispatch({ type: "decrementCols" });
  // };

  // const handleIncrementMargin = () => {
  //   dispatch({ type: "incrementMargin" });
  // };

  // const handleDecrementMargin = () => {
  //   dispatch({ type: "decrementMargin" });
  // };

  return (
    <div className="widgets-menu-container" hidden={!state.showWidgetsMenu}>
      <MyTab value={state.tab} onChange={handleTab}>
        <Tab label="Fondo de pantalla" />
        <Tab label="Barra de buscador" />
        {/* <Tab label="Columnas" /> */}
      </MyTab>
      <MyTabPanel value={state.tab} index={0}></MyTabPanel>
      <MyTabPanel value={state.tab} index={1}>
        <div
          draggable
          onDragLeave={handleWidgetDragLeave}
          onDragEnd={handleWidgetDragEnd}
        >
          <SearchTextField />
        </div>
      </MyTabPanel>
      {/* <MyTabPanel value={indexTab} index={2}>
        <Button onClick={handleDecrementCols}>-</Button>
        <MyPaper>{state.cols} columnas</MyPaper>
        <Button onClick={handleIncrementCols}>+</Button>
        <Button onClick={handleDecrementMargin}>-</Button>
        <MyPaper>{state.margin} margen</MyPaper>
        <Button onClick={handleIncrementMargin}>+</Button>
      </MyTabPanel> */}
    </div>
  );
};

export default WidgetsMenu;
