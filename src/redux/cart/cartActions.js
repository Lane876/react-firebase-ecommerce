import { GET_PRODUCT, REMOVE_PRODUCT, CLEAR_CART } from "../types"



export const getProduct = (product) => {


    return {
        type: GET_PRODUCT,
        payload: product
    }
}
export const removeProduct = (item) => {
    return {
        type: REMOVE_PRODUCT,
        payload: item
    }
}
export const clearCart = () => {
    return {
        type: CLEAR_CART,
        payload: ''
    }
}