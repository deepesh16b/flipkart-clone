import React from "react";
import { navData } from "./../constant/data";
import { Box, styled, Typography } from "@mui/material";
import "../assets/font.css";


const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor :' #fff',
  [theme.breakpoints.down("md")]: {
    overflow: "hidden",
  },
}));
const Component = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: "55px",
  padding: "12px 160px 12px 140px",
  justifyContent: "space-between",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    padding: "0 10px 5px 10px ",
    overflow: "scroll",
    marginTop: "116px",
  },
}));

const Item = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    margin: "0 5px",
  },
}));
const Text = styled(Typography)(({ theme }) => ({
  fontFamily: "Roboto,Arial,sans-serif",
  fontWeight: "500",
  fontSize: "14px",
  color: "#2a2a2a",
  [theme.breakpoints.down("md")]: {
    fontSize: 10,
  },
}));
const NavImg = styled("img")(({ theme }) => ({
  height: "64px",
  [theme.breakpoints.down("md")]: {
    height: "52px",
  },
}));

const Navbar = () => {
  return (
    <Wrapper>
      <Component>
        {navData.map((data) => (
          <Item>
            <NavImg src={data.url} alt="categories" />
            <Text>{data.text}</Text>
          </Item>
        ))}
      </Component>
    </Wrapper>
  );
};
export default Navbar;
