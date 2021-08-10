import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AppContext from '../../../contexts/AppContext/AppContext';
import MyLikes from './MyLikes';

const ctxMock = {
    dispatch: jest.fn()
}

describe('<MyLikes />', () => {
    test('Component renders correctly ', () => {
        render(
            <AppContext.Provider value={ctxMock}>
                <MyLikes />
            </AppContext.Provider>
        )

        const mainElement = screen.getByTestId('myLikes');
        expect(mainElement).toBeInTheDocument();
    })

    test('Clicked test', () => {
        render(
            <AppContext.Provider value={ctxMock}>
                <MyLikes />
            </AppContext.Provider>
        )

        const mainElement = screen.getByTestId('myLikes');
        userEvent.click(mainElement);
        
        expect(mainElement).toHaveStyle({
            backgroundColor: '#c0392b'
        })
    })
})