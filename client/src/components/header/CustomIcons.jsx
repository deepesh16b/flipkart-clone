import React from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

const Wrapper = styled(Box)`
  display: flex;
  margin : 0 3% 0 auto;
  align-items : center;

  & > button, & > p, & > div {
    margin-right : 40px;
    // align-items : center;
    font-size : 15px;
    font-weight : 600;
  }
`;
const CartBox = styled(Box)`
display : flex
`;
const LoginButton = styled(Button)`
  background : #fff;
  color : #2874f0;
  border-radius : 1px;
  padding: 4px 40px ;
  text-transform : none;
  box-shadow : none;
  height : 32px;
  font-weight : 400;
`;




const CustomIcons = () => {
  return (
    <Wrapper>
      <LoginButton variant="contained">Login</LoginButton>
      <Typography style={{marginTop : 3, width : 135}}>Become a Seller</Typography>
      <Typography style={{marginTop : 3}} >More</Typography>
      <CartBox>
        <ShoppingCart />
        <Typography>Cart</Typography>
      </CartBox>
    </Wrapper>
  );
};
export default CustomIcons;
