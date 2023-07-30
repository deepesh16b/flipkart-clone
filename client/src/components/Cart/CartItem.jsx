
import { Card, Box, Typography, Button, styled } from '@mui/material';

// import { addEllipsis } from '../../utils/util';
import GroupButton from './GroupButton';

const Component = styled(Card)`
    border-top: 1px solid #f0f0f0;
    border-radius: 0px;
    display: flex;
`;

const LeftComponent = styled(Box)(({ theme }) => ({
    margin: "20px 30px", 
    display: "flex",
    flexDirection: 'column',
    [theme.breakpoints.down("md")]: {
        margin: "20px 10px", 
        flexDirection: 'column',
    },
  }));

const ImgBox = styled(Box)(({ theme }) => ({
    height: 120,
     width:120,
      display : 'flex', 
      alignItems:'center',
    [theme.breakpoints.down("md")]: {
        height: 90,
        width:90,
    },
  }));
  const Box1 = styled(Box)(({ theme }) => ({
    margin : 20,
    [theme.breakpoints.down("md")]: {
       margin : "20px 0"
    },
  }));


const SmallText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
`;

const Cost = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
`;

const MRP = styled(Typography)`
    color: #878787;
`;

const Discount = styled(Typography)`
    color: #388E3C;
`;

const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
`;

const CartItem = ({ item, removeItemFromCart }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    return (
        <Component>
            <LeftComponent>
                <ImgBox >
                <img src={item.url} style={{ height: "100%", maxWidth: '100%', margin:'auto' }} alt='' /></ImgBox>
                <GroupButton />
            </LeftComponent>
            <Box1 >
                <Typography>{(item.title.longTitle.length > 50 ? (item.title.longTitle.substring(0,70) + '...') :(item.title.longTitle) )}</Typography>
                <SmallText>Seller:RetailNet
                    <span><img src={fassured} style={{ width: 50, marginLeft: 10 }} alt='' /></span>
                </SmallText>
                <Typography style={{margin: '20px 0'}}>
                    <Cost component="span">₹{item.price.cost}</Cost>&nbsp;&nbsp;&nbsp;
                    <MRP component="span"><strike>₹{item.price.mrp}</strike></MRP>&nbsp;&nbsp;&nbsp;
                    <Discount component="span">{item.price.discount} off</Discount>
                </Typography>
                <Remove onClick={() => removeItemFromCart(item.id)}>Remove</Remove>
            </Box1>
        </Component>
    )
}

export default CartItem;