import { Box } from "@mui/material";
import { useContext } from "react";
import MyContext from "../tools/MyContext";
import MyTab from "../components/MyTab";

const WidgetsMenu = ({ children }) => {
  const { edit, setEdit } = useContext(MyContext);

  if (edit)
    return (
      <Box
        sx={{
          position: "absolute",
          transform: "translate(-50%)",
          width: "95%",
          height: "40%",
          bottom: "0px",
          left: "50%",
          backgroundColor: "black",
          opacity: "30%",
          borderRadius: "25px 25px 0 0 ",
        }}
      >
        <MyTab />
      </Box>
    );
  return null;
};

export default WidgetsMenu;
