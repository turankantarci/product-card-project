import Image from 'next/image';
import styled from 'styled-components';
import ProductLikeButton from '../ProductLikeButton/ProductLikeButton';

const $ProductImage = styled.div`
    position: relative;
    text-align: center;
`

const ProductImage = ({ src, width, height, productId }) => {
    return (
        <$ProductImage>
            <Image src={src} width={width} height={height} />
            <ProductLikeButton productId={productId} />
        </$ProductImage>
    )
}

export default ProductImage;
