export const StoreReducer = (state, action) => {
    switch (action.type) {
        case 'INITIAL_DATA':
            return {
                ...state,
                favoritesArray: action.payload
            }

        case 'ADD_FAVORITE':

            return {
                ...state,
                favoritesArray: [...state.favoritesArray, action.payload]
            }


        default:
            return state;
    }

}