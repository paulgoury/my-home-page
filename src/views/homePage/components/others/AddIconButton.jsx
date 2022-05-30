import { useContext } from "react";

import AddIcon from "@mui/icons-material/Add";

import { SettingsContext } from "../../tools";
import { CustomIconButton } from "../";

function AddIconButton({ handleClick, handleStyle }) {
  const { state } = useContext(SettingsContext);

  return (
    <CustomIconButton
      isVisible={state.mainGridData.isDraggable}
      handleClick={handleClick}
      handleStyle={handleStyle}
    >
      <AddIcon color="success" fontSize="small" />
    </CustomIconButton>
  );
}

export default AddIconButton;
