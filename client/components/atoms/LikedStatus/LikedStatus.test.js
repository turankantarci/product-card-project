import { render, screen } from '@testing-library/react';
import LikedStatus from './LikedStatus';

describe('<LikedStatus />', () => {
    test('Component renders correctly', () => {
        render(<LikedStatus likeCount="3" />)

        const textElement = screen.getByText(/3 ürün/i);
        const imgElement = screen.getByRole('img');

        expect(textElement).toBeInTheDocument();
        expect(imgElement).toBeInTheDocument();
    })
})