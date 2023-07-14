import { Box, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <CssBaseline />
      <Box p={2} sx={{ bgcolor: "#FEFEFE", height: "100vh", display: "flex", justifyContent: "center", alignContent: "center" }}>
        <Outlet />
      </Box>
    </>
  );
};

export default RootLayout;
