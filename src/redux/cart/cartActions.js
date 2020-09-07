import { GET_PRODUCT, REMOVE_PRODUCT, CLEAR_CART, INC, DEC } from "../types"



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
export const inc = (item) => {
    return {
        type: INC,
        payload: item
    }
}
export const dec = (item) => {
    return {
        type: DEC,
        payload: item
    }
}