import { IconButton } from "@mui/material";

function CustomIconButton({ isVisible, handleClick, handleStyle, children }) {
  const Component = () => {
    return (
      <div onClick={handleClick} className={handleStyle}>
        <IconButton>{children}</IconButton>
      </div>
    );
  };

  return isVisible ? <Component /> : <></>;
}

export default CustomIconButton;
