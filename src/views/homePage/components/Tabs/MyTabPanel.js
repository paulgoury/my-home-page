import { Paper } from "@mui/material";
import "./myTabPanel.css";

const MyTabPanel = ({ children, value, index }) => {
  const handleMouseDown = (event) => {
    console.log({ event });
  };

  const layout = (
    <Paper className="tabPanel" draggable onMouseDown={handleMouseDown}>
      {children}
    </Paper>
  );

  return value === index ? layout : null;
};

export default MyTabPanel;
