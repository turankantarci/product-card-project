import { render, screen } from '@testing-library/react';
import GenericInfo from './GenericInfo';

describe('<GenericInfo />', () => {
    test('Component renders correctly', () => {
        render(<GenericInfo text='test text' align="right" />)

        const mainElement = screen.getByText(/test text/i);

        expect(mainElement).toBeInTheDocument();
        expect(mainElement).toHaveStyle({
            textAlign: 'right'
        })
    })
})