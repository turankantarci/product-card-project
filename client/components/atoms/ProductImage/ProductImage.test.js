import { render, screen } from '@testing-library/react';
import AppContext from '../../../contexts/AppContext/AppContext';
import ProductImage from './ProductImage';

const ctxMock = {
    state: {},
    dispatch: jest.fn()
}

describe('<ProductImage />', () => {
    test('Component renders correctly', () => {
        render(
            <AppContext.Provider value={ctxMock}>
                <ProductImage src="/test.jpg" width="10" height="10" productName="test image" />
            </AppContext.Provider>
        )

        const mainElement = screen.getByAltText(/test image/i);
        expect(mainElement).toBeInTheDocument();
    })

    test('Component renders correctly with product like button', () => {
        render(
            <AppContext.Provider value={ctxMock}>
                <ProductImage src="/test.jpg" width="10" height="10" productName="test image" />
            </AppContext.Provider>
        )

        const mainElement = screen.getByAltText(/test image/i);
        const productLikeButtonElement = screen.getByTestId("productLikeButton");
        expect(mainElement).toBeInTheDocument();
        expect(productLikeButtonElement).toBeInTheDocument();
    })
})