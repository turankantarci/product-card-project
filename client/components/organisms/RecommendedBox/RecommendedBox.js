import { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../../../contexts/AppContext/AppContext';
import GenericInfo from '../../atoms/GenericInfo/GenericInfo';
import Title from '../../atoms/Title/Title';
import ProductBox from '../../molecules/ProductBox/ProductBox';

const $RecommendedBoxWrapper = styled.div`
    padding: .5rem;
    margin-top: 1rem;
    border: 1px solid #e2e2e2;
    border-radius: .5rem;
`

const $RecommendedBox = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media screen and (min-width: 1230px) {
        flex-wrap: nowrap;
    }
`

const RecommendedBox = () => {
    const { state } = useContext(AppContext);

    return (
        <$RecommendedBoxWrapper>
            <Title text="İlginizi Çekebilecek Ürünler"/>
            <$RecommendedBox>
                {state.showLikedProducts ? (
                    state.likedProducts.length ? (
                        state.likedProducts.map((product) => <ProductBox key={product.id} product={product} />)
                    ) : (
                        <GenericInfo text="Henüz bir ürün beğenmediniz." align="center" />
                    )
                ) : (
                    state.products.map((product) => <ProductBox key={product.id} product={product} />)
                )}
            </$RecommendedBox>
        </$RecommendedBoxWrapper>
    )
}

export default RecommendedBox;
