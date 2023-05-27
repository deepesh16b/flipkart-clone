import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";
import { getProducts } from "../../redux/actions/productsAction";
import { useDispatch, useSelector } from "react-redux";
import { Slide } from "./Slide";
import { MidSlide } from "./MidSlide";
import { MidSection } from "./MidSection";

const Container = styled(Box)`
  padding: 15px 10px;
  background: #f1f3f6;
`;
const Home = () => {
  const { products } = useSelector((state) => state.getProducts);
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
        <MidSlide products={products} />
        <MidSection />
        <Slide products={products} title="Trending Offers" timer={false} />
        <Slide products={products} title="Recommended Items" timer={false} />
        <Slide products={products} title="Discounts for You" timer={false} />
        <Slide products={products} title="Season's top picks" timer={false} />
      </Container>
    </>
  );
};
export default Home;
