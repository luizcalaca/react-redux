import CartTypes from './action-types'

const initialState = {
    products: [],
    productsTotalPrice: 0
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case CartTypes.ADD_PRODUCT:
            const productIsAlreadyInCart = state.products.some(
                (product) => product.id ===action.payload.id
            )

            if(productIsAlreadyInCart) {
                return {
                    ...state,
                    products: state.products.map((product) =>
                        product.id === action.payload.id
                        ? {...product, quantity: product.quantity + 1}
                        : product
                )}
            }

            return{
                ...state,
                products: [...state.products, {...action.payload, quantity: 1}]
            }
        
        case CartTypes.REMOVE_PRODUCT:
            return{
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            }
            
        case CartTypes.INCREASE_PRODUCT_QUANTITY:
            return{
                ...state,
                products: state.products.map(product => product.id === action.payload
                    ? {...product, quantity: product.quantity + 1}
                    : product)
            }

        default:
            return state;
    }
}

export default cartReducer;