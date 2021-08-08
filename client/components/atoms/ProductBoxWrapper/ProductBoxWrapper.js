import styled from 'styled-components';

const $ProductBoxWrapper = styled.div`
    flex: 1 1 100%;
    padding: .5rem;

    @media screen and (min-width: 768px) {
        flex-basis: 50%;
        max-width: 50%;
    }

    @media screen and (min-width: 1230px) {
        flex-basis: 25%;
        max-width: 25%;
    }
`

const ProductBoxWrapper = ({ children }) => {
    return (
        <$ProductBoxWrapper>
            {children}
        </$ProductBoxWrapper>
    )
}

export default ProductBoxWrapper
