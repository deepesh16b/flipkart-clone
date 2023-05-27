import { Box, Button, Divider, Typography, styled } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 468 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 468, min: 0 },
    items: 1,
  },
};
const Component = styled(Box)`
  margin-top: 10px;
  background: #ffffff;
`;
const Deals = styled(Box)`
  padding: 15px 20px;
  display: flex;
  align-items: center;
`;
const Timer = styled(Box)`
  display: flex;
  margin-left: 10px;
  color: #7f7f7f;
  align-items: center;
`;
const ViewAllButton = styled(Button)`
  background-color: #2874f0;
  margin-left: auto;
  font-size: 13px;
  font-weight: 600;
  border-radius: 2px;
  color: #ffffff;
`;
const Text = styled(Typography)`
  margin-top: 5px;
  font-size: 14px;
`;
const Image = styled("img")({
  width: "auto",
  height: 150,
});
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

export const Slide = ({ products, title, timer }) => {
  shuffleArray(products);
  const rendered = ({ hours, minutes, seconds }) => {
    return (
      <Box variant="span">
        {hours} : {minutes} : {seconds} Left
      </Box>
    );
  };
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
  return (
    <Component>
      <Deals>
        <Typography style={{ fontWeight: 500, fontSize: 21, marginRight: 20 }}>
          {title}
        </Typography>
        {timer && (
          <Timer>
            <img style={{ width: 24, marginRight: 10 }} src={timerURL} alt="" />
            <Countdown date={Date.now() + 5.04e7} renderer={rendered} />
          </Timer>
        )}
        <ViewAllButton>VIEW ALL</ViewAllButton>
      </Deals>
      <Divider />
      <Carousel
        responsive={responsive}
        infinite={true}
        centerMode={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        draggable={false}
        keyBoardControl={true}
        swipeable={false}
        showDots={false}
        //   slidesToSlide={1}
        autoPlay={false}
        autoPlaySpeed={4000}
      >
        {products.map((product) => (
          <Box textAlign="center" style={{ padding: "25px 15px" }}>
            <Image src={product.url} alt="product" />
            <Text style={{ color: "#212121", fontWeight: 600 }}>
              {product.title.shortTitle}
            </Text>
            <Text style={{ color: "green" }}>{product.discount}</Text>
            <Text style={{ color: "#212121", opacity: "0.6" }}>
              {product.tagline}
            </Text>
          </Box>
        ))}
      </Carousel>
    </Component>
  );
};
