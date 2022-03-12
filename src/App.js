import { Box } from "@mui/system";

import "./app.css";
import MyAuthentication from "./views/auth/MyAuthentication";
import HomePage from "./views/homePage/HomePage";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        // p: 10,
        height: "100%",
      }}
    >
      {/* <MyAuthentication /> */}
      <HomePage />
    </Box>
  );
}

export default App;
