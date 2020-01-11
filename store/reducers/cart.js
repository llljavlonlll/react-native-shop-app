import {
    ADD_TO_CART,
    REMOVE_SINGLE,
    REMOVE_ALL,
    RESET_CART
} from "../actions/cart";

const initialState = {
    goodsInTheCart: [],
    price: { subtotal: 0.0, tax: 0.0, total: 0.0, shipping: 0.0 }
};

const cartReducer = (state = initialState, action) => {
    const calculatePrice = goods => {
        if (goods.length > 0) {
            let subtotal = goods.reduce(
                (accumulator, good) => accumulator + good.price,
                0
            );
            subtotal = Math.ceil(subtotal * 100) / 100;
            const tax = Math.ceil(subtotal * 0.08 * 100) / 100;
            const total = Math.ceil((subtotal + tax) * 100) / 100;
            const shipping = total >= 35 ? 0 : 4.99;
            return [subtotal, tax, total, shipping];
        } else {
            return [0.0, 0.0, 0.0];
        }
    };

    switch (action.type) {
        case ADD_TO_CART: {
            const good = action.goods.find(item => item.id === action.goodId);
            const updatedCart = [...state.goodsInTheCart, good];
            const [subtotal, tax, total, shipping] = calculatePrice(
                updatedCart
            );
            return {
                goodsInTheCart: updatedCart,
                price: {
                    subtotal,
                    tax,
                    total,
                    shipping
                }
            };
        }
        case REMOVE_SINGLE: {
            const goodIndex = state.goodsInTheCart
                .slice()
                .reverse()
                .findIndex(item => item.id === action.goodId);
            const goodLastIndex =
                goodIndex >= 0
                    ? state.goodsInTheCart.length - 1 - goodIndex
                    : goodIndex;
            const updatedCart = state.goodsInTheCart.slice();
            updatedCart.splice(goodLastIndex, 1);
            const [subtotal, tax, total, shipping] = calculatePrice(
                updatedCart
            );
            return {
                goodsInTheCart: updatedCart,
                price: {
                    subtotal,
                    tax,
                    total,
                    shipping
                }
            };
        }
        case REMOVE_ALL: {
            const updatedCart = state.goodsInTheCart.filter(
                good => good.id !== action.goodId
            );
            const [subtotal, tax, total, shipping] = calculatePrice(
                updatedCart
            );
            return {
                goodsInTheCart: updatedCart,
                price: {
                    subtotal,
                    tax,
                    total,
                    shipping
                }
            };
        }
        case RESET_CART:
            return initialState;
        default:
            return state;
    }
};

export default cartReducer;
