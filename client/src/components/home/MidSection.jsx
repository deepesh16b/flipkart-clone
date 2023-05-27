import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import React from "react";

const ImageURL = [
  "https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg",
  "https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50",
];

const Wrapper = styled(Grid)`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;
const Image = styled('img')(({ theme }) => ({ 
    display: 'flex',
    marginTop: 10,
    justifyContent: 'space-between',
    width: '100%',
    // [theme.breakpoints.down('md')]: {
    //     objectFit: 'cover',
    //     height: 120
    // }
}));
export const MidSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

  return (
    <>
      <Wrapper lg={12} sm={12} md={12} container>
        {ImageURL.map((image) => (
          <Grid item lg={4} md={4} sm={12}>
            <img src={image} alt="" style={{ width: "100%" }} />
          </Grid>
        ))}
      </Wrapper>
      <Image  src={url} />
    </>
  );
};