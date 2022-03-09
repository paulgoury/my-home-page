import { Grid } from "@mui/material";

const MyTitle = ({ mb, children }) => {
  return (
    <Grid item mb={mb} typography="h3">
      {children}
    </Grid>
  );
};

export default MyTitle;
