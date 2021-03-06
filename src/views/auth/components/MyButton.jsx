import { Button } from "@mui/material";

const MyButton = ({ color, onClick, children }) => {
  return (
    <Button
      fullWidth
      variant="contained"
      size="large"
      color={color}
      sx={{ borderRadius: "10px" }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default MyButton;
