import { Button } from "@mui/material";

const MyButton = ({ color, onClick, value }) => {
  return (
    <Button
      fullWidth
      variant="contained"
      size="large"
      color={color}
      sx={{ borderRadius: "10px" }}
      onClick={onClick}
    >
      {value}
    </Button>
  );
};

export default MyButton;
