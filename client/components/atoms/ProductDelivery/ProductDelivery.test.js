import { render, screen } from '@testing-library/react';
import ProductDelivery from './ProductDelivery';

describe('<ProductDelivery />', () => {
    test('Component renders correctly without image', () => {
        render(
            <ProductDelivery deliveryType={2} />
        )
        
        const mainElement = screen.getByText(/kargo/i);
        expect(mainElement).toBeInTheDocument();
    })

    test('Component renders correctly with image', () => {
        render(
            <ProductDelivery deliveryType={0} />
        )

        const mainElement = screen.getByText(/kargo/i);
        const imgElement = screen.getByRole("img");
        expect(mainElement).toBeInTheDocument();
        expect(imgElement).toBeInTheDocument();
    })
})