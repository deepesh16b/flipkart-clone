import { Typography, Box, styled, Button } from "@mui/material";
import { Link , useLocation } from "react-router-dom";

const Component = styled(Box)(({ theme }) => ({
  width: "80%",
  height: "75vh",
  background: "#fff",
  margin: "80px 140px",
  [theme.breakpoints.down("sm")]: {
    width: "95%",
    height: "65vh",
    background: "#fff",
    margin: "150px 10px",
  },
}));

const Container = styled(Box)`
  text-align: center;
  padding-top: 70px;
`;

const Image = styled("img")(({ theme }) => ({
  width: "20%",
  [theme.breakpoints.down("sm")]: {
    width: "50%",
   
  },
}));

const StyledButton = styled(Button)`
  display: flex;
  margin: 20px auto;
  background: #fb641b;
  color: #fff;
  border-radius: 2px;
  width: 200px;
  height: 45px;
`;
const Success = () => {
  const location = useLocation();
  const ref = new URLSearchParams(location.search).get("reference");
  return (
    <Component>
      <Container>
        <Image src='/success.gif' alt='' />
        <Typography style={{fontSize:19, fontWeight:500, marginBottom : 10}}>Hurray!</Typography>
        <Typography component="span">Your Order is Placed.</Typography>
        <br />
        <Typography component="span">Order ID: <span style={{color:'#0dc043'}}>{ref}</span></Typography>
        <br />
        <Link to={"/"} style={{ color: "inherit", textDecoration: "none" }}>
          <StyledButton variant="contained">Continue Shopping</StyledButton>
        </Link>
      </Container>
    </Component>
  );
};

export default Success;
