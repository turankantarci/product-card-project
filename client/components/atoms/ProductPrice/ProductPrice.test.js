import { render, screen } from '@testing-library/react';
import ProductPrice from './ProductPrice';

describe('<ProductPrice />', () => {
    test('Component works correctly', () => {
        render(
            <ProductPrice productPrice={1234.89}/>
        )

        const mainElement = screen.getByTestId("productPrice");
        expect(mainElement).toBeInTheDocument();
    })
})