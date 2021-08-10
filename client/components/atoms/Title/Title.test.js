import { render, screen } from '@testing-library/react';
import Title from './Title';

describe('<Title />', () => {
    test('Component renders correctly', () => {
        render(<Title text="test title" />)
        
        const mainElement = screen.getByText(/test title/i);
        expect(mainElement).toBeInTheDocument();
    })
})