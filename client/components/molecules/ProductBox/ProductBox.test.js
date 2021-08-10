import { render, screen } from '@testing-library/react';
import AppContext from '../../../contexts/AppContext/AppContext';
import ProductBox from './ProductBox';

const productMock = {
    id: 0,
    name: "Vestel 58U9500 UHD Smart TV",
    image: "/assets/images/product-1.jpg",
    price: 1234.50,
    url: "https://www.google.com/",
    deliveryType: 0
}

describe('<ProductBox />', () => {
    test('Component renders correctly ', () => {
        render(
            <AppContext.Provider value={{}}>
                <ProductBox product={productMock} />
            </AppContext.Provider>

        )

        const imgElement = screen.getByAltText(/vestel 58U9500/i);
        const titleElement = screen.getByText(/vestel 58U9500/i);
        const priceElement = screen.getByText(/1.234,50/i);
        const deliveryElement = screen.getByText(/kargo/i);
        expect(imgElement).toBeInTheDocument();
        expect(titleElement).toBeInTheDocument();
        expect(priceElement).toBeInTheDocument();
        expect(deliveryElement).toBeInTheDocument();
    })
})