import styled from 'styled-components';

const $ProductPrice = styled.div`
    font-size: 1.1rem;
    padding: 1rem;
    background-color: #f4f4f4;
    border-radius: .3rem;
`

const ProductPrice = ({ productPrice }) => {
    return (
        <$ProductPrice data-testid="productPrice">
            {Number(productPrice).toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}
        </$ProductPrice>
    )
}

export default ProductPrice;
