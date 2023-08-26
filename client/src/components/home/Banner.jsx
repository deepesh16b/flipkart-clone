import React from "react";
import Carousel from "react-multi-carousel";
import { bannerData } from "../constant/data";
import { styled, createTheme } from "@mui/material";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 468 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 468, min: 0 },
    items: 1,
  },
};
const Image = styled("img")(({theme})=>({
  width: "100%",
  height: 260,
  [theme.breakpoints.down("md")] : {
    objectFit : 'cover',
    height : 125
  }
}))

const Banner = () => {
  const theme = createTheme();
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      draggable={false}
      // {(window.screen.width() > "800px")}
      removeArrowOnDeviceType={['tablet', 'mobile']}
      swipeable={(window.screen.width < 800) ? true : false}
      showDots={(window.screen.width < 800) ? true : false}
      slidesToSlide={1}
      autoPlay={true}
      autoPlaySpeed={3500}
    >
      {bannerData.map((data) => (
        <Image theme={theme} src={data.url} alt="banner" />
      ))}
    </Carousel>
  );
};
export default Banner;
