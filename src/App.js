import { Box } from "@mui/system";

import "./app.css";
import MyAuthentication from "./views/auth/MyAuthentication";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        p: 10,
        height: "100%",
      }}
    >
      <MyAuthentication />
    </Box>
  );
}

export default App;
