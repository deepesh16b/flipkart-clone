import { URL } from "../../serverLink";
import { useEffect, useState } from "react";
import { Box, Typography, Button, Grid, styled } from "@mui/material";
import {
  // useNavigate,
  useParams,
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  // resetCart,
} from "../../redux/actions/cartActions";

import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
// import { post } from "../../utils/paytm";
// import { payUsingPaytm } from "../../services/api";
import axios from "axios";

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
  const [amount, setAmount] = useState(100);
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (cartItems && id !== cartItems.id) dispatch(addToCart(id));
  }, [dispatch, cartItems, id]);

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  // const navigate = useNavigate();

  const buyNow = async () => {
    const {data : {key}} = await axios.get(`${URL}/getKey`, {
      responseType: "json",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    console.log("get api key success in frontend");
    const { data:{order} } = await axios.post(`${URL}/checkout`, {
      amount,
    });
    console.log("order created success in frontend");
    // console.log(data);
    const options = {
      key, 
      amount: order.amount, 
      currency: "INR",
      name: "Flipkart",
      description: "Complete the Payment",
      image: 'https://backend.insideiim.com/wp-content/uploads/2015/08/Flipkart-logo-insideiim.png',
      order_id: order.id,
      callback_url: `${URL}/paymentVerification`,
      prefill: {
        name: "Deepesh Bhardwaj",
        email: "deepeshbhardwaj58@example.com",
        contact: "9876543210",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#2874f0",
      },
    };
    console.log("razorpay seccess in frobntend");

    var razor = new window.Razorpay(options);
      razor.open();
  };

  return (
    <>
      {cartItems.length ? (
        <Component container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography style={{ fontWeight: 600, fontSize: 18 }}>
                My Cart ({cartItems?.length})
              </Typography>
            </Header>
            {cartItems.map((item) => (
              <CartItem
                item={item}
                removeItemFromCart={removeItemFromCart}
                key={item.id}
              />
            ))}
            <BottomWrapper>
              <StyledButton variant="contained" onClick={() => buyNow()}>
                Place Order
              </StyledButton>
            </BottomWrapper>
          </LeftComponent>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} setAmount={setAmount} />
          </Grid>
        </Component>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
