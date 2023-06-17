import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  styled,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { LoginContext } from "../../contexts/LoginProvider.jsx";
import Profile from "./Profile.jsx";
import LoginDialog from "../login/LoginDialog.jsx";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "0 3% 0 auto",
  alignItems: "center",
  "& > button,& > p,& > div": {
    marginRight: "40px",
    fontSize: "15px",
    fontWeight: "600",
  },
  [theme.breakpoints.down("md")]: {
    "& > button,& > p,& > div": {
      marginRight: "10px",
    },
    flexDirection: "row-reverse",
  },
}));
const CartBox = styled(Box)(({ theme }) => ({
  display: "flex",
  // [theme.breakpoints.down("md")]: {},
}));
const LoginButton = styled(Button)(({ theme }) => ({
  background: "#fff",
  color: " #2874f0",
  borderRadius: "1px",
  padding: " 4px 40px",
  textTransform: "none",
  boxShadow: "none",
  height: " 32px",
  fontWeight: "400",
  variant: "contained",
  "&:hover": {
    backgroundColor: " #fff",
    opacity: "1",
    scale: "1.01",
  },
  [theme.breakpoints.down("md")]: {
    variant: "text",
    backgroundColor: " #2874f0",
    color: "#fff",
    padding: " 4px 15px",
    paddingRight : 0,
    // position: "absolute",
    // left: "auto",
    "&:hover": {
      backgroundColor: " #2874f0",
      color: "#fff",
      opacity: "1",
      scale: "1.0",
    },
  },
}));

const CustomIcons = () => {
  const theme = createTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));

  const [loginOpen, setLoginOpen] = useState(false);
  const { account, setAccount } = useContext(LoginContext);
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        {account ? (
          <Profile account={account} setAccount={setAccount} />
        ) : (
          <LoginButton onClick={() => setLoginOpen(true)}>Login</LoginButton>
        )}

        {isMobileView ? null : (
          <>
            <Typography style={{ marginTop: 3, width: 135 }}>
              {" "}
              Become a Seller
            </Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>
          </>
        )}

        <CartBox>
          <ShoppingCart />
          {isMobileView ? null : <Typography>Cart</Typography>}
        </CartBox>
        <LoginDialog loginOpen={loginOpen} setLoginOpen={setLoginOpen} />
      </Wrapper>
    </ThemeProvider>
  );
};
export default CustomIcons;
