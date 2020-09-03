const { GET_PRODUCT, REMOVE_PRODUCT,  CLEAR_CART} = require("../types");


const initialState = {
    product : [],

}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return {...state,
            product: state.product.concat(action.payload)}
        case REMOVE_PRODUCT:
            return {
                ...state,
                product: state.product.filter(val=> val.unique !== action.payload.unique)
            }
        case CLEAR_CART:
            return {
                ...state,
                product: []
            }
        
        default:
            return state;
    }
}

export default cartReducer