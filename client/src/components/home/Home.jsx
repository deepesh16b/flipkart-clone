import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";
import { getProducts } from "../../redux/actions/productsAction";
import { useDispatch, useSelector } from "react-redux";
import { Slide } from "./Slide";
import { MidSlide } from "./MidSlide";
import { MidSection } from "./MidSection";

const Container = styled(Box)(({ theme }) => ({
  padding:' 15px 10px',
  background: '#f1f3f6',
  [theme.breakpoints.down('md')] : {
    padding:' 8px 5px',
  }
}));
const Home = () => {
  const { loading,products } = useSelector((state) => state.getProducts);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Container>
        <Banner />
        <MidSlide loading={loading} products={products} />
        <MidSection />
        <Slide loading={loading} products={products} title="Trending Offers" timer={false} />
        <Slide loading={loading} products={products} title="Recommended Items" timer={false} />
        <Slide loading={loading} products={products} title="Discounts for You" timer={false} />
        <Slide loading={loading} products={products} title="Season's top picks" timer={false} />
      </Container>
    </>
  );
};
export default Home;
