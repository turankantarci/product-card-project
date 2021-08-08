import React from 'react';
import Container from '../atoms/Container/Container';
import ControlBar from '../molecules/ControlBar/ControlBar';
import RecommendedBox from '../organisms/RecommendedBox/RecommendedBox';

const ProductCardTemplate = () => {
    return (
        <Container>
            <ControlBar />
            <RecommendedBox />
        </Container>
    )
}

export default ProductCardTemplate;
