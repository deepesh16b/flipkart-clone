import { useState } from "react";

import { Button, Box, styled } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

// import { payUsingPaytm } from '../../service/api';
// import { post } from '../../utils/paytm';

import { addToCart} from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import axios from "axios";
import { URL } from "../../serverLink";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("md")]: {
    padding: "20px 15px",
    textAlign: "center",
  },
}));

const Image = styled("img")(({ theme }) => ({
  padding: "15px 20px",
  border: "1px solid #f0f0f0",
  width: "85%",
  maxHeight: "80vh",
  [theme.breakpoints.down("md")]: {
    border: "none",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: "46%",
  borderRadius: "2px",
  height: "50px",
  color: "#FFF",
  marginTop: "18px",
  [theme.breakpoints.down("md")]: {
    width: "45%",
    height: "44px",
    fontSize: "0.8rem",
  },
}));

const ActionItem = ({ product }) => {
  const navigate = useNavigate();
  const { id } = product;

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  
  const buyNow = async () => {
    const {
      data: { key },
    } = await axios.get(`${URL}/getKey`);
    let amount = product.price.cost + 40;
    const {
      data: { order },
    } = await axios.post(`${URL}/checkout`, {
      amount,
    });
    console.log(product);
    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Flipkart",
      description: "Complete the Payment",
      image: "https://backend.insideiim.com/wp-content/uploads/2015/08/Flipkart-logo-insideiim.png",
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

    var razor = new window.Razorpay(options);
    razor.open();
  };

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };

  return (
    <LeftContainer>
      <Image src={product.detailUrl} />
      <br />
      <StyledButton
        style={{ marginRight: 15, background: "#ff9f00" }}
        onClick={() => addItemToCart()}
        variant="contained"
      >
        <Cart />
        Add to Cart
      </StyledButton>
      <StyledButton
        style={{ background: "#fb641b" }}
        onClick={() => buyNow()}
        variant="contained"
      >
        <Flash /> Buy Now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItem;
