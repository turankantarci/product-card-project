import styled from 'styled-components';
import Image from 'next/image';
import { useState, useContext } from 'react';
import AppContext from '../../../contexts/AppContext/AppContext';

const $ProductLikeButton = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    background-color: #e2e2e2;
    border-radius: 50%;

    :hover {
        background-color: #cecece;
    }
`

const ProductLikeButton = ({ productId }) => {
    const [liked, setLiked] = useState(false);
    const {state, dispatch} = useContext(AppContext);

    const likeHandler = (e) => {
        e.preventDefault();
        if(liked) {
            dispatch({
                type: 'UNLIKE_PRODUCT',
                payload: state.likedProducts.filter(product => {
                    return product.id !== productId;
                })
            });
            setLiked(false);
        } else {
            dispatch({
                type: 'LIKE_PRODUCT',
                payload: state.products.find(product => {
                    return product.id === productId;
                })
            });
            setLiked(true);
        }
    }

    return (
        <$ProductLikeButton onClick={likeHandler}>
            {liked ? <Image src={'/assets/images/heart-fill.svg'} width="20" height="20" /> : <Image src={'/assets/images/heart.svg'} width="20" height="20" />}
        </$ProductLikeButton>
    )
}

export default ProductLikeButton
