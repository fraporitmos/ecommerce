export const StoreReducer = (state, action) => {
    switch (action.type) {
        case 'INITIAL_DATA':
            return {
                ...state,
                favoritesArray: action.payload
            }
        case 'INITIAL_CART':
            return {
                ...state,
                cartArray: action.payload
            }
        case 'ADD_FAVORITE':
            return {
                ...state,
                favoritesArray: [...state.favoritesArray, action.payload]
            }

        case 'ADD_TO_CART':
            return {
                ...state,
                cartArray: [...state.cartArray, action.payload]
            }

        case 'REMOVE_TO_CART':
            return {
                ...state,
                cartArray: state.cartArray.filter(product => {
                    return product.id != action.payload.id
                })
            }
        case 'REMOVE_FAVORITE':
            return {
                ...state,
                favoritesArray: state.favoritesArray.filter(product => {
                    return product.id != action.payload.id
                })
            }
        case 'CHANGE_SCREEN':
            return {
                ...state,
                currentScreen: action.payload
            }

        default:
            return state;
    }

}