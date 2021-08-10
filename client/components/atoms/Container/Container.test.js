import { render, screen } from '@testing-library/react';
import Container from './Container';

describe('<Container />', () => {
    test('Component renders correctly', () => {
        render(
            <Container />
        )

        const mainElement = screen.getByTestId("container");
        expect(mainElement).toBeInTheDocument();
    })
})