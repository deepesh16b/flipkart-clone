import React from "react";
import { Box, AppBar, Toolbar, styled, Typography } from "@mui/material";
import Search from "./Search";
import CustomIcons from "./CustomIcons";

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subLogoURL =
    "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png";

  const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 56px;
    box-shadow: none;
  `;
  const StyledBox = styled(Box)`
    margin-left: 11.8%;
    line-height: 0;
  `;
  const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
    color: #ffe;
  `;
const CustomButtonWrapper = styled(Box)`
  margin : 0 7% 0 auto 
`;



  // ----------------------RETURN-------------------------------
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 56 }}>
        <StyledBox>
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
        <Search />
        <CustomButtonWrapper>
          <CustomIcons />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};
export default Header;
