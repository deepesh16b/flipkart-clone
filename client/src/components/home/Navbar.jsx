import React from "react";
import { navData } from "./../constant/data";
import { Box, styled, Typography } from "@mui/material";
import "../assets/font.css";

const Component = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: "55px",
  padding: "12px 160px 12px 140px",
  justifyContent: "space-between",
  textAlign: "center",
  [theme.breakpoints.down("md")] : {
    padding: "12px 10px 12px 10px",
    overflow : "hidden"
  }
}));

const NavImg = styled("img")(({ theme }) => ({
    
height : '64px',
  [theme.breakpoints.down("md")] : {
    height : "55px"
  }
}));

const Navbar = () => {
  return (
    <Component>
      {navData.map((data) => (
        <Box>
          <NavImg src={data.url} alt="categories" />
          <Typography
            style={{
              fontFamily: "Roboto,Arial,sans-serif",
              fontWeight: "500",
              fontSize: "14px",
              color: "#2a2a2a",
            }}
          >
            {data.text}
          </Typography>
        </Box>
      ))}
    </Component>
  );
};
export default Navbar;
