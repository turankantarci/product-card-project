import { render, screen } from '@testing-library/react';
import AppContext from '../../../contexts/AppContext/AppContext';
import RecommendedBox from './RecommendedBox';

describe('<RecommendedBox />', () => {
    test('Component renders correctly if there are liked products', () => {
        const ctxMock = {
            state: {
                showLikedProducts: true,
                likedProducts: [
                    {
                        id: 0,
                        name: "Vestel 58U9500 UHD Smart TV",
                        image: "/assets/images/product-1.jpg"
                    }
                ]
            }
        }

        render(
            <AppContext.Provider value={ctxMock}>
                <RecommendedBox />
            </AppContext.Provider>
        )

        const imgElement = screen.getByAltText(/vestel 58U9500/i);
        const titleElement = screen.getByText(/vestel 58U9500/i);
        expect(imgElement).toBeInTheDocument();
        expect(titleElement).toBeInTheDocument();
    })

    test('Component renders correctly if there are no liked products', () => {
        const ctxMock = {
            state: {
                showLikedProducts: true,
                likedProducts: []
            }
        }

        render(
            <AppContext.Provider value={ctxMock}>
                <RecommendedBox />
            </AppContext.Provider>
        )

        const mainElement = screen.getByText(/beğenmediniz/i);
        expect(mainElement).toBeInTheDocument();
    })

    test('Component renders correctly with all products', () => {
        const ctxMock = {
            state: {
                showLikedProducts: false,
                products: [
                    {
                        id: 0,
                        name: "Vestel 58U9500 UHD Smart TV",
                        image: "/assets/images/product-1.jpg"
                    }
                ]
            }
        }

        render(
            <AppContext.Provider value={ctxMock}>
                <RecommendedBox />
            </AppContext.Provider>
        )

        const imgElement = screen.getByAltText(/vestel 58U9500/i);
        const titleElement = screen.getByText(/vestel 58U9500/i);
        expect(imgElement).toBeInTheDocument();
        expect(titleElement).toBeInTheDocument();
    })
})