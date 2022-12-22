import CarActionTypes from "./action-types";

export const addProductToCart = (payload) => ({
    type: CarActionTypes.ADD_PRODUCT,
    payload
});

export const removeProductFromCart = (payload) => ({
    type: CarActionTypes.REMOVE_PRODUCT,
    payload
});