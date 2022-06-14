import { cartActionTypes } from './cart.actionType';
import { addItemToCart, removeItemFromCart } from './cartUtils'
const INITIAL_STATE = {
    cartItems: []
}
const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes._CART_ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case cartActionTypes._CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }

        default:
            return state;
    }
}
export default cartReducer;