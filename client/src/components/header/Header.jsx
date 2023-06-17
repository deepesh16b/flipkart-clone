import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  createTheme,
  useMediaQuery,
  styled,
  Typography,
  Divider,
} from "@mui/material";
import Search from "./Search";
import CustomIcons from "./CustomIcons";
import { Link } from "react-router-dom";

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subLogoURL =
    "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png";

  const StyledHeader = styled(AppBar)(({ theme }) => ({
    background: "#2874f0",
    height: " 56px",
    boxShadow: "none",
    [theme.breakpoints.down("md")]: {
      height: " 104px",
    },
  }));
  const StyledBox = styled(Link)(({ theme }) => ({
    marginLeft: '11.8%',
    lineHeight: 0,
    color: 'inherit',
    textDecoration: 'none',
    [theme.breakpoints.down("md")]: {
      margin: '10px 0 0 5.8%',
    },
  }));
  const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
    color: #ffe;
  `;
  const CustomButtonWrapper = styled(Box)(({ theme }) => ({
    margin: "0 7% 0 auto ",
    [theme.breakpoints.down("md")]: {
      margin: "5px 2% 0 auto ",
    },
  }));

  // ----------------------RETURN-------------------------------
  const theme = createTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 56 }}>
        <StyledBox to="/">
          <img src={logoURL} alt="logo" style={{ width: "75px" }} />
          <Box style={{ display: "flex" }}>
            <SubHeading>
              Explore&nbsp;
              <Box
                component={"span"}
                style={{ color: "#ffe500", fontWeight: 600 }}
              >
                Plus
              </Box>
            </SubHeading>
            <img
              src={subLogoURL}
              alt=""
              style={{ width: 10, height: 10, marginLeft: 2 }}
            />
          </Box>
        </StyledBox>
        {isMobileView ? null : <Divider />}
        <Search />
        <CustomButtonWrapper>
          <CustomIcons />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};
export default Header;
