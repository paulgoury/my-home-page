import { useContext, useState } from "react";

import { SettingsContext } from "../../../tools";
import getWidgetsMenuData from "../utils/getWidgetsMenuData";

import styles from "./styles/widgetsMenu.module.css";

const WidgetsMenu = () => {
  const { state } = useContext(SettingsContext);

  const [tab, setTab] = useState(0);

  const { tabs, tabPanels } = getWidgetsMenuData;

  return (
    <div hidden={!state.isVisibleWidgetsMenu} className={styles.mainActive}>
      <div className={styles.containers}>
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
