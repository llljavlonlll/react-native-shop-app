import { ADD_NEW_ORDER } from "../actions/orders";

const initialState = {
    orders: []
};

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_ORDER:
            const updatedOrder = [...state.orders, action.order];
            return {
                ...state,
                orders: updatedOrder
            };
        default:
            return state;
    }
};

export default ordersReducer;
