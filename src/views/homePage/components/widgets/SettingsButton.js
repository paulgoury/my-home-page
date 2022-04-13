import { Settings } from "@mui/icons-material";
import { IconButton } from "@mui/material";

import { useActions } from "../../tools";

function SettingsButton() {
  const { showWidgetsMenu } = useActions();

  return (
    <IconButton onClick={showWidgetsMenu}>
      <Settings sx={{ width: "100%", height: "100%" }} />
    </IconButton>
  );
}

export default SettingsButton;
