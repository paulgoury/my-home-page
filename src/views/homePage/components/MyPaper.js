import { Paper } from "@mui/material";

function MyPaper({ children }) {
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: "2%",
      }}
    >
      {children}
    </Paper>
  );
}

export default MyPaper;
