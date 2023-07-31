import { useState } from 'react';

import { Button, Box, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// import { payUsingPaytm } from '../../service/api';
// import { post } from '../../utils/paytm';

import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';
import { post } from '../../utils/paytm';
import { payUsingPaytm } from '../../services/api';

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 15px',
        textAlign:'center',
    }
}))

const Image = styled('img')(({ theme }) => ({
    padding: '15px 20px',
    border: '1px solid #f0f0f0',
    width: '85%',
    maxHeight : '80vh',
    [theme.breakpoints.down('md')]: {
        border: 'none',
    }
}))

const StyledButton = styled(Button)(({ theme }) => ({
    width: '46%',
    borderRadius: '2px',
    height: '50px',
    color: '#FFF',
    marginTop:'18px',
    [theme.breakpoints.down('md')]: {
        width: '45%',
        height: '44px',
        fontSize : '0.8rem'
    }
}))

const ActionItem = ({ product }) => {
    const navigate = useNavigate();
    const { id } = product;
        
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const buyNow = async () => {
        navigate('/success')
        // let response = await payUsingPaytm({ amount: 500, email: 'deepeshbhardwaj58@gmail.com'});
        // var information = {
        //     action: 'https://securegw-stage.paytm.in/order/process',
        //     params: response    
        // }
        // post(information);
    }

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }

    return (
        <LeftContainer>
            
            <Image src={product.detailUrl} /><br />
            <StyledButton  style={{marginRight: 15, background: '#ff9f00'}} onClick={()=>addItemToCart()} variant="contained"><Cart />Add to Cart</StyledButton>
            <StyledButton style={{background: '#fb641b'}} onClick={()=>buyNow()} variant="contained"><Flash /> Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;