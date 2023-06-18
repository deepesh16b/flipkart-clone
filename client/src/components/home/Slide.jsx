import { Box, Button, Divider, Typography, styled } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 468 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 468, min: 0 },
    items: 2,
  },
};
const Component = styled(Box)`
  margin-top: 10px;
  background: #ffffff;
  alignitems: "center";
`;
const Deals = styled(Box)`
  padding: 15px 20px;
  display: flex;
  align-items: center;
`;
const Timer = styled(Box)(({ theme }) => ({
  display: "flex",
  marginLeft: "10px",
  color: "#7f7f7f",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    marginLeft: "0",
  },
}));

const ViewAllButton = styled(Button)`
  background-color: #2874f0;
  margin-left: auto;
  font-size: 13px;
  font-weight: 600;
  border-radius: 2px;
  color: #ffffff;
`;
const Text = styled(Typography)(({ theme }) => ({
  marginTop: "5px",
  fontSize: "14px",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: "11px",
  },
}));
const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: 21,
  alignItems: "center",
  marginRight: 20,
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
    marginRight: 5,
  },
}));

const CountdownText = styled(Box)(({ theme }) => ({
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
}));
const TimerImg = styled("img")(({ theme }) => ({
  width: 24,
  marginRight: 10,
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    width: 16,
    marginRight: 5,
    marginLeft: 5,
  },
}));
const Item = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: "25px 15px",
  [theme.breakpoints.down("md")]: {
    margin: "0 ",
    padding: "25px 15px 15px 15px",
    objectFit: "contain",
  },
}));

const Image = styled("img")(({ theme }) => ({
  width: "auto",
  height: 150,
  maxWidth: 200,
  [theme.breakpoints.down("md")]: {
    height: 95,
    objectFit: "cover",
  },
}));
function shuffleArray(array) {
  if (!array || array.length === 0) {
    return [];
  }

  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}


export const Slide = ({ loading, products, title, timer }) => {
  
  const shuffledProducts  = shuffleArray(products);
  const rendered = ({ hours, minutes, seconds }) => {
    return (
      <CountdownText variant="span">
        {hours} : {minutes} : {seconds} Left
      </CountdownText>
    );
  };
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
  return (
    <Component>
      <Deals>
        <Heading >{title}</Heading>
        {timer && (
          <Timer>
            <TimerImg style={{}} src={timerURL} alt="" />
            <Countdown date={Date.now() + 5.04e7} renderer={rendered} />
          </Timer>
        )}
        <ViewAllButton>VIEW ALL</ViewAllButton>
      </Deals>
      <Divider />
      <Carousel
        responsive={responsive}
        infinite={window.screen.width > 800 ? true : false}
        centerMode={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        draggable={false}
        keyBoardControl={true}
        swipeable={window.screen.width < 800 ? true : false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        showDots={false}
        //   slidesToSlide={1}
        autoPlay={false}
        autoPlaySpeed={4000}
      >
        {loading ? (
          <p
            style={{
              margin: "0",
              fontSize: "25px",
              color: "#2874f0",
              textAlign: "center",
              background: "#fff",
            }}
          >
            <img style={{ marginLeft:'100px',width: "100px" }} src="/loading.gif" alt="loading" />
          </p>
        ) : (
          shuffledProducts.map((product) => (
            <Link
              to={`product/${product.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Item>
                <Image src={product.url} alt="product" />
                <Text style={{ color: "#212121", fontWeight: 600 }}>
                  {product.title.shortTitle}
                </Text>
                <Text style={{ color: "green" }}>{product.discount}</Text>
                <Text style={{ color: "#212121", opacity: "0.6" }}>
                  {product.tagline}
                </Text>
              </Item>
            </Link>
          ))
        )}
      </Carousel>
    </Component>
  );
};
