export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_SINGLE = "REMOVE_SINGLE";
export const REMOVE_ALL = "REMOVE_ALL";
export const RESET_CART = "RESET_CART";

export const addToCart = id => {
    return (dispatch, getState) => {
        const { goods } = getState();

        dispatch({
            type: ADD_TO_CART,
            goods: goods.goods,
            goodId: id
        });
    };
};

export const removeSingle = id => {
    return {
        type: REMOVE_SINGLE,
        goodId: id
    };
};

export const removeAll = id => {
    return {
        type: REMOVE_ALL,
        goodId: id
    };
};

export const resetCart = () => {
    return {
        type: RESET_CART
    };
};
