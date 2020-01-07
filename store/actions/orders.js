export const ADD_NEW_ORDER = "ADD_NEW_ORDER";

export const addNewOrder = order => {
    return {
        type: ADD_NEW_ORDER,
        order
    };
};
