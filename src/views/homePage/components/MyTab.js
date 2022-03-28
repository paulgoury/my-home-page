import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
};

const MyTab = () => {
  const [value, setValue] = useState(0);

  const handleTab = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs value={value} onChange={handleTab} centered>
        <Tab label="Fondo de pantalla" />
        <Tab label="Tiempo" />
        <Tab label="Barra de buscador" />
        <Tab label="Paleta" />
        <Tab label="Tamaño de visualizacion" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div draggable={true} unselectable="on">
          Shakeskere
        </div>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
};

export default MyTab;
