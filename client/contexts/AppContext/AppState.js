import React, { useReducer, useEffect } from 'react';
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_PRODUCTS } from '../../queries'
import AppContext from './AppContext';
import AppReducer from './AppReducer';
import { initialState } from './AppInitialState';

const AppState = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {

        const client = new ApolloClient({
            uri: 'http://localhost:4000',
            cache: new InMemoryCache()
        });

        client.query({ query: GET_PRODUCTS }).then(res => {
            dispatch({
                type: 'PRODUCTS',
                payload: {
                    products: res.data.products
                }
            })
        });

    }, [])

    return (
        <AppContext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppState;
