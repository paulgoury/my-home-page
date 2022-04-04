import { Settings } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useContext } from "react";
import SettingsContext from "../tools/Context/SettingsContext";

const SettingsButton = () => {
  const { openConfig, setOpenConfig } = useContext(SettingsContext);

  const handleButtonClick = () => {
    setOpenConfig(!openConfig);
  };

  return (
    <IconButton onClick={handleButtonClick}>
      <Settings sx={{ width: "100%", height: "100%" }} />
    </IconButton>
  );
};

export default SettingsButton;
