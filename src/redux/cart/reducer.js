import CartTypes from './action-types'

const initialState = {
    products: [],
    productsTotalPrice: 0
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case CartTypes.ADD_PRODUCT:
            return{
                ...state,
                products: [...state.products, action.payload]
            }
        default:
            return state;
    }
}

export default cartReducer;