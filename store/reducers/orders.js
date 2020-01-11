import { ADD_NEW_ORDER, LOAD_ORDERS } from "../actions/orders";

const initialState = {
    orders: []
};

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ORDERS:
            return {
                orders: action.orders
            };
        case ADD_NEW_ORDER:
            const updatedOrders = [...state.orders, action.order];
            return {
                orders: updatedOrders
            };
        default:
            return state;
    }
};

export default ordersReducer;
