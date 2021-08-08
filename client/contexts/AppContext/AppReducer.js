const AppReducer = (state, action) => {
    switch (action.type) {
        case 'PRODUCTS':
            return {
                ...state,
                products: action.payload.products
            }
        case 'LIKE_PRODUCT':
            return {
                ...state,
                likedProducts: [...state.likedProducts, action.payload]
            }
        case 'UNLIKE_PRODUCT':
            return {
                ...state,
                likedProducts: action.payload
            }
        case 'SHOW_LIKED_PRODUCTS':
            return {
                ...state,
                showLikedProducts: action.payload
            }
        default:
            return state;
    }
}

export default AppReducer;