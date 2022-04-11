import { Settings } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useContext } from "react";
import SettingsContext from "../tools/context/SettingsContext";

function SettingsButton() {
  const { dispatch } = useContext(SettingsContext);

  const handleButtonClick = () => {
    dispatch({ type: "showWidgetsMenu" });
  };

  return (
    <IconButton onClick={handleButtonClick}>
      <Settings sx={{ width: "100%", height: "100%" }} />
    </IconButton>
  );
}

export default SettingsButton;
