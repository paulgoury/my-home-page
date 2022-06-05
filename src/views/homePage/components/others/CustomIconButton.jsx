import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";

function CustomIconButton({
  isVisible,
  name,
  size,
  handleClick,
  handleStyle,
  variant,
}) {
  const getIcon = () => {
    switch (name) {
      case "remove":
        return <ClearIcon color="error" fontSize={size} />;
      case "add":
        return <AddIcon color="success" fontSize={size} />;

      default:
        break;
    }
  };

  const Component = () => {
    return (
      <div onClick={handleClick} className={handleStyle}>
        <IconButton variant={variant}>{getIcon()}</IconButton>
      </div>
    );
  };

  return isVisible ? <Component /> : null;
}

export default CustomIconButton;
