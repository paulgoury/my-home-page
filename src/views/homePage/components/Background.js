import { Box } from "@mui/system";

const Background = ({ backgroundPicture, children }) => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        backgroundImage: `url(${backgroundPicture})`,
      }}
    >
      {children}
    </Box>
  );
};

export default Background;
