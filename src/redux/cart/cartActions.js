import { GET_PRODUCT, ADD_PRODUCT } from "../types"


export const getProduct = (product) => {
    return {
        type: GET_PRODUCT,
        payload: product
    }
}
export const addProduct = (item) => {
    return {
        type: ADD_PRODUCT,
        payload: item
    }
}