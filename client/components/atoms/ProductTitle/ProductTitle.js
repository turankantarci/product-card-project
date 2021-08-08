import styled from 'styled-components';

const $ProductTitle = styled.div`
    min-height: 54px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 1.2rem;
    font-weight: bold;
    margin: .5rem 0;
`

const ProductTitle = ({ productName }) => {
    return (
        <$ProductTitle title={productName}>
            {productName}
        </$ProductTitle>
    )
}

export default ProductTitle;
