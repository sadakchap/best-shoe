import React from 'react';
import styled from 'styled-components';
import { CgShoppingCart } from 'react-icons/cg';
import { addItemToCart, itemInCart, removeItemFromCart } from './helpers/cartHelper';
import { useHistory } from 'react-router-dom';
import { PrimaryButton, SecondaryButton } from '../reuseableComponents/Buttons';

const CardFooter = styled.div`
    width: 100%;
`;

const ProductPrice = styled.span`
    position: absolute;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: #1c1c1c;
    font-size: 1rem;
    text-align: center;
    bottom: 2%;
    right: 5%;
    transition: 400ms ease-in-out;
`;

const ProductDesc = styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    color: #777;
    font-size: 0.7rem;
`;

const ProductTitle = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: #ffba08;
    font-size: 1.1rem;
`;

const CardBody = styled.div`
    width: 100%;
    padding: 0.5em;
`;

const ProductImg = styled.img`
    position: relative;
    left: -5%;
    width: 110%;
    height: 100%;
    object-fit: contain;
    transition: 600ms ease-in-out;
`;

const ImgWrapper = styled.div`
    position: relative;
    background: #e7e7e7;
    width: 100%;
    height: 250px;
    border-radius: 5px;
`;

const ProductCardWrapper = styled.div`
    position: relative;
    padding: 0.8rem;
    width: 270px;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 0 5px rgba(0, 0, 0, .1);
    border: 1px solid #eaeaea;
    transition: 0.5s ease;
    &:hover{
        ${ProductImg}{
            transform: rotate(30deg) scale(1.1);
            left: 3%;
        }
        ${ProductPrice}{
            right: 75%;
        }
        box-shadow: 0 0 30px rgba(0, 0, 0, .1);
        transform: scale(1.06);
    }
`;

const UserProductCard = ({ product, setReload = f=>f, reload=undefined, childRef }) => {
    
    const productStatus = itemInCart(product._id);
    const history = useHistory();

    const showAddToCart = () => (
        !productStatus && (<PrimaryButton width="100%" onClick={() => {
            addItemToCart(product);
            history.push('/cart');
        }}> <CgShoppingCart size="1.3rem" /> Add to Cart</PrimaryButton>)
    );

    const showRemoveFromCart = () => (
        productStatus && (<SecondaryButton onClick={() => {
            removeItemFromCart(product);
            setReload(!reload)
        }}> Remove from Cart</SecondaryButton>)
    );
    
    return childRef ? (
      <ProductCardWrapper ref={childRef ? childRef : null}>
        <ImgWrapper>
          <ProductImg src={product.photo_url} />
          <ProductPrice>₹ {product.price}</ProductPrice>
        </ImgWrapper>
        <CardBody>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductDesc>{product.desc.substring(0, 70) + " ..."}</ProductDesc>
        </CardBody>
        <CardFooter>
          {showAddToCart()}
          {showRemoveFromCart()}
        </CardFooter>
      </ProductCardWrapper>
    ) : (
      <ProductCardWrapper>
        <ImgWrapper>
          <ProductImg src={product.photo_url} />
          <ProductPrice>₹ {product.price}</ProductPrice>
        </ImgWrapper>
        <CardBody>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductDesc>{product.desc.substring(0, 70) + " ..."}</ProductDesc>
        </CardBody>
        <CardFooter>
          {showAddToCart()}
          {showRemoveFromCart()}
        </CardFooter>
      </ProductCardWrapper>
    );
}

export default UserProductCard
