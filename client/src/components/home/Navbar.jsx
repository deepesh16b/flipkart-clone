import React from "react";
import { navData } from "./../constant/data";
import { Box, styled, Typography } from "@mui/material";
import '../assets/font.css';

const Component = styled(Box)`
  display: flex;
  margin-top: 55px;
  padding: 12px 160px 12px 140px;
  justify-content: space-between;
  text-align:center;
`;
const NavImg = styled("img")({
  height: "64px",
});

const Navbar = () => {
  return (
    <Component>
      {navData.map((data) => (
        <Box>
          <NavImg src={data.url} alt="categories" />
          <Typography style={{ fontFamily: "Roboto,Arial,sans-serif", fontWeight: "500" , fontSize : "14px", color : "#2a2a2a"}}>
            {data.text}
          </Typography>
        </Box>
      ))}
    </Component>
  );
};
export default Navbar;
