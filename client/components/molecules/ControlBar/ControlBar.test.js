import { render, screen } from '@testing-library/react';
import AppContext from '../../../contexts/AppContext/AppContext';
import ControlBar from './ControlBar';

const ctxMock = {
    state: {
        likedProducts: ['','']
    }
}

describe('<ControlBar />', () => {
    test('Component renders correctly ', () => {
        render(
            <AppContext.Provider value={ctxMock}>
                <ControlBar />
            </AppContext.Provider>
        )

        const likedStatusElement = screen.getByText(/2 ürün/i);
        const myLikesElement = screen.getByTestId('myLikes');
        expect(likedStatusElement).toBeInTheDocument();
        expect(myLikesElement).toBeInTheDocument();
    })
})