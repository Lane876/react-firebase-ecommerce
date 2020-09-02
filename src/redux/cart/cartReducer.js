const { GET_PRODUCT, ADD_PRODUCT } = require("../types");

const initialState = {
    product:[]
}

const cartReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return {...state, product:action.payload}
        // case ADD_PRODUCT:
        //     return {...state, product: action.payload}
        
        default:
            return state;
    }
}

export default cartReducer