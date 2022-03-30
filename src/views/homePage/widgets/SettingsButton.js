import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const SettingsButton = ({ onClick }) => {
  return (
    <IconButton key="edit" onClick={onClick}>
      <Edit />
    </IconButton>
  );
};

export default SettingsButton;
