import { render, screen } from '@testing-library/react';
import ProductDelivery from './ProductDelivery';

describe('<ProductDelivery />', () => {
    test('Component renders correctly', () => {
        render(
            <ProductDelivery deliveryType={0} />
        )

        const mainElement = screen.getByText(/kargo/i);
        const imgElement = screen.getByRole("img");
        expect(mainElement).toBeInTheDocument();
        expect(imgElement).toBeInTheDocument();
    })
})