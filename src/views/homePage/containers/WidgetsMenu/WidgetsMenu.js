import MyTab from "../../components/Tabs/MyTab";
import { useContext, useState } from "react";
import SettingsContext from "../../tools/Context/SettingsContext";
import "./widgetsMenu.css";
import { Tab } from "@mui/material";
import MyTabPanel from "../../components/Tabs/MyTabPanel";
import { SearchTextField } from "../../widgets";

const WidgetsMenu = ({ children }) => {
  const { openConfig, setOpenConfig } = useContext(SettingsContext);

  const [indexTab, setIndexTab] = useState(0);

  const handleTab = (event, newValue) => {
    setIndexTab(newValue);
  };

  const widgetsMenuContainer = (
    <div className="widgets-menu">
      <MyTab value={indexTab} onChange={handleTab}>
        <Tab label="Fondo de pantalla" />
        <Tab label="Tiempo" />
        <Tab label="Barra de buscador" />
      </MyTab>
      <MyTabPanel value={indexTab} index={0}>
        <SearchTextField />
      </MyTabPanel>
      <MyTabPanel value={indexTab} index={1}>
        Tab panel 2
      </MyTabPanel>
      <MyTabPanel value={indexTab} index={2}>
        Tab panel 3
      </MyTabPanel>
    </div>
  );

  return openConfig ? widgetsMenuContainer : null;
};

export default WidgetsMenu;
