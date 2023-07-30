import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productsAction";
import { Box, styled, Grid, Typography } from "@mui/material";
import ProductDetail from "./ProductDetail";
import ActionItem from "./ActionItem";

const fassured =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

const Component = styled(Box)(({ theme }) => ({
  marginTop: "55px",
  background: "#f2f2f2",
  padding : '0 80px',
  [theme.breakpoints.down("md")]: {
    marginTop: "104px",
    padding : '0',
  },
}));

const Container = styled(Grid)(({ theme }) => ({
  background: "#FFFFFF",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));

const RightContainer = styled(Grid)(({ theme }) => ({
  marginTop: " 50px",
  padding: "0 50px",
  "& > p": {
    marginTop: "10px",
  },
  [theme.breakpoints.down("md")]: {
    marginTop: "10px",
    padding: "0 20px",
  },
}));

export const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, product } = useSelector((state) => state.getProductDetails);

  useEffect(() => {
    if (product && product.id !== id) dispatch(getProductDetails(id));
  }, [dispatch, id, loading, product]);
  return (
    <Component>
      <Box></Box>
      {loading ? (
        <p
          style={{
            margin: "200px 0",
            fontSize: "25px",
            color: "#2874f0",
            textAlign: "center",
            background : '#fff'
          }}
        >
          <img style={{width:'200px'}} src="/loading.gif" alt="loading"/>
        </p>
      ) : (
        product &&
        Object.keys(product).length && (
          <Container container>
            <Grid item lg={4} md={4} sm={8} xs={12}>
              <ActionItem product={product} />
            </Grid>
            <RightContainer item lg={8} md={8} sm={8} xs={12}>
              <Typography>{product.title.longTitle}</Typography>
              <Typography
                style={{ marginTop: 5, color: "#878787", fontSize: 14 }}
              >
                8 Ratings & 1 Reviews
                <span>
                  <img
                    src={fassured}
                    style={{ width: 77, marginLeft: 20 }}
                    alt=""
                  />
                </span>
              </Typography>
              <Typography>
                <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>
                &nbsp;&nbsp;&nbsp;
                <span style={{ color: "#878787" }}>
                  <strike>₹{product.price.mrp}</strike>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span style={{ color: "#388E3C" }}>
                  {product.price.discount} off
                </span>
              </Typography>
              <ProductDetail product={product} />
            </RightContainer>
          </Container>
        )
      )}
    </Component>
  );
};
