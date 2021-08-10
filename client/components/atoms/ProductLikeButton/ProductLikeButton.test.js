import { render, screen } from '@testing-library/react';
import AppContext from '../../../contexts/AppContext/AppContext';
import ProductLikeButton from './ProductLikeButton';

describe('<ProductLikeButton />', () => {
    test('Component renders correctly ', () => {
        render(
            <AppContext.Provider value={{}}>
                <ProductLikeButton />
            </AppContext.Provider>
        )

        const mainElement = screen.getByRole('img');
        expect(mainElement).toBeInTheDocument();
    })
})