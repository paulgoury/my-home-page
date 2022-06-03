import { useContext, useState } from "react";

import ClearIcon from "@mui/icons-material/Clear";

import { SettingsContext, useActions } from "../tools";
import { getWidgetsMenuData } from "../utils";
import { CustomIconButton } from "../components";

import styles from "./styles/widgetsMenu.module.css";

const WidgetsMenu = () => {
  const { state } = useContext(SettingsContext);
  const { changeVisibiliyWidgetsMenu } = useActions();

  const [tab, setTab] = useState(0);

  const { tabs, tabPanels } = getWidgetsMenuData;

  return (
    <div hidden={!state.isVisibleWidgetsMenu} className={styles.mainActive}>
      <div className={styles.containers}>
        <CustomIconButton
          isVisible
          handleClick={changeVisibiliyWidgetsMenu}
          handleStyle={styles.closeIcon}
        >
          <ClearIcon color="error" fontSize="medium" />
        </CustomIconButton>
        <div className={styles.leftContainer}>
          {tabs.map((item, index) => (
            <div
              key={index}
              onClick={() => setTab(index)}
              className={tab === index ? styles.tabActive : styles.tabInactive}
            >
              {tab === index ? item.title : item.icon}
            </div>
          ))}
        </div>
        <div className={styles.rightContainer}>
          {tabPanels.map((item, index) => (
            <div hidden={tab !== index} key={index} className={styles.tabPanel}>
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WidgetsMenu;
// <MyTabPanel value={indexTab} index={2}>
// <Button onClick={handleDecrementCols}>-</Button>
// <MyPaper>{state. mainGridCols} columnas</MyPaper>
// <Button onClick={handleIncrementCols}>+</Button>
// <Button onClick={handleDecrementMargin}>-</Button>
// <MyPaper>{state. mainGridMargin} margen</MyPaper>
// <Button onClick={handleIncrementMargin}>+</Button>
// </MyTabPanel>

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