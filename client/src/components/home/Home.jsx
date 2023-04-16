import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";


const Container = styled(Box)`
    padding : 15px 10px;
    background : #f1f3f6;
`
const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Banner />
      </Container>
    </>
  );
};
export default Home;
