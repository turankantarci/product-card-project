import { render, screen } from '@testing-library/react';
import ProductBoxWrapper from './ProductBoxWrapper';

describe('<ProductBoxWrapper />', () => {
    test('Component renders correctly', () => {
        render(
            <ProductBoxWrapper>
                <div>test content</div>
            </ProductBoxWrapper>
        );

        const mainElement = screen.getByText(/test content/i);
        expect(mainElement).toBeInTheDocument();
    })
})