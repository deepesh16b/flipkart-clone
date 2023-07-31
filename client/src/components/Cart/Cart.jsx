import { useEffect } from "react";
import { Box, Typography, Button, Grid, styled } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, resetCart } from "../../redux/actions/cartActions";

import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import { post } from "../../utils/paytm";
import { payUsingPaytm } from "../../services/api";

// import { post } from '../../utils/paytm';
// import { payUsingPaytm } from '../../service/api';

const Component = styled(Grid)(({ theme }) => ({
  padding: "30px 160px",
  display: "flex",
  marginTop: "55px",
  [theme.breakpoints.down("sm")]: {
    padding: "15px 0",
    marginTop: "90px",
  },
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  [theme.breakpoints.down("sm")]: {
    marginBottom: 15,
    paddingRight: 0,
  },
}));

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;

const BottomWrapper = styled(Box)`
  padding: 13px 20px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  border-radius: 2px;
  width: 197px;
  height: 44px;
`;

const Cart = () => {
  const cartDetails = useSelector((state) => state.cart);
  const { cartItems } = cartDetails;
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (cartItems && id !== cartItems.id) dispatch(addToCart(id));
  }, [dispatch, cartItems, id]);

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
const navigate = useNavigate()
  const buyNow = async () => {
    dispatch(resetCart());
    navigate('/success')
      // let response = await payUsingPaytm({ amount: 500, email: 'deepeshbhardwaj58@gmail.com'});
      // var information = {
      //     action: 'https://securegw-stage.paytm.in/order/process',
      //     params: response
      // }
      // post(information);
  }
  
  return (
    <>
      { cartItems.length ? (
        <Component container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography style={{ fontWeight: 600, fontSize: 18 }}>
                My Cart ({cartItems?.length})
              </Typography>
            </Header>
            {cartItems.map((item) => (
              <CartItem item={item} removeItemFromCart={removeItemFromCart} />
            ))}
            <BottomWrapper>
              <StyledButton variant="contained" onClick={()=> buyNow()}>Place Order</StyledButton>
            </BottomWrapper>
          </LeftComponent>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Component>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
