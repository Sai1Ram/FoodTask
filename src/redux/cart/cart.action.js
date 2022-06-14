import { cartActionTypes } from './cart.actionType';
export const cartAddItem = (item) => ({
    type: cartActionTypes._CART_ADD_ITEM,
    payload: item
});
export const cartRemoveItem = (item) => ({
    type: cartActionTypes._CART_REMOVE_ITEM,
    payload: item
});