import { ADD_TO_CART, REMOVE_ITEM_CART, UPDATE_CART_QUANTITY, CLEAR_CART, SAVE_DELIVERY_INFO, SET_RESTAURANT_ID } from "../constants/cartConstant";

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.payload;
            const isItemExist = state.cartItems.find((i) => i.foodItem === item.foodItem);
            if (isItemExist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((i) =>
                        i.foodItem === isItemExist.foodItem ? item : i)
                }
            }
            else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        case UPDATE_CART_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item.foodItem === action.payload.foodItemId ?
                        {
                            ...item,
                            quantity: action.payload.quantity
                        }
                        : item)
            }

        case REMOVE_ITEM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((i) =>
                    i.foodItem !== action.payload)
            }

        case SAVE_DELIVERY_INFO:
            return {
                ...state,
                deliveryInfo: action.payload
            }

        case CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }

        case SET_RESTAURANT_ID:
            return {
                ...state,
                restaurant: action.payload
            }

        default:
            return state;
    }
}