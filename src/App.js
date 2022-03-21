import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/system";

import "./app.css";
import mySimpleThemeDark from "./styles/mySimpleThemeDark";
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
      <ThemeProvider theme={mySimpleThemeDark}>
        <HomePage />
      </ThemeProvider>
    </Box>
  );
}

export default App;
