import { Grid } from "@mui/material";

const MyWrapper = ({ children }) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Grid>
  );
};

export default MyWrapper;
