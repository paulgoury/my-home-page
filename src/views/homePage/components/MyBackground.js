import { Box } from "@mui/system";

const MyBackground = ({ backgroundPicture, children }) => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${backgroundPicture})`,
      }}
    >
      {children}
    </Box>
  );
};

export default MyBackground;
