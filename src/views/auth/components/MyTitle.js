const MyTitle = ({ mb, value }) => {
  return (
    <Grid item mb={mb} typography="h3">
      {value}
    </Grid>
  );
};

export default MyTitle;
