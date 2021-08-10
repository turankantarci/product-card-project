import { render, screen } from '@testing-library/react';
import ProductTitle from './ProductTitle';

describe('<ProductTitle />', () => {
    test('Component renders correctly', () => {
        render(<ProductTitle productName="test product name" />)

        const mainElement = screen.getByText(/test product name/i);
        expect(mainElement).toBeInTheDocument();
    })
})