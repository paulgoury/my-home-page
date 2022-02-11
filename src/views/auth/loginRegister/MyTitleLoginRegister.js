import { Grid } from "@mui/material";

const MyTitleLoginRegister = ({ mb, children }) => {
  return (
    <Grid item typography="h3" mb={mb}>
      {children}
    </Grid>
  );
};

export default MyTitleLoginRegister;
