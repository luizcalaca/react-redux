import CarActionTypes from "./action-types";

export const addProductToCart = (payload) => ({
    type: CarActionTypes.ADD_PRODUCT,
    payload
});