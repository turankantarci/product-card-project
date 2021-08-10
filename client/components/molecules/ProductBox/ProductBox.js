import styled from 'styled-components';
import ProductBoxWrapper from '../../atoms/ProductBoxWrapper/ProductBoxWrapper';
import ProductImage from '../../atoms/ProductImage/ProductImage';
import ProductTitle from '../../atoms/ProductTitle/ProductTitle';
import ProductPrice from '../../atoms/ProductPrice/ProductPrice';
import ProductDelivery from '../../atoms/ProductDelivery/ProductDelivery';

const $ProductBox = styled.div`
    padding: .5rem;
    border: 1px solid #e2e2e2;
    border-radius: 0.5rem;
`

const ProductBox = ({ product }) => {
    return (
        <ProductBoxWrapper>
            <a href={product.url} target="_blank">
                <$ProductBox>
                    <ProductImage src={product.image} width={250} height={250} productName={product.name} productId={product.id} />
                    <ProductTitle productName={product.name} />
                    <ProductPrice productPrice={product.price} />
                    <ProductDelivery deliveryType={product.deliveryType} />
                </$ProductBox>
            </a>
        </ProductBoxWrapper>
    )
}

export default ProductBox
