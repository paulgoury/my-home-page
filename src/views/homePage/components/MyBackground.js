import { Box } from "@mui/system";

const MyBackground = ({ children }) => {
  const backgroundPicture = "";
  // https://source.unsplash.com/random/1920x1080
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
