export const ADD_YOUR_GOOD = "ADD_YOUR_GOOD";
export const REMOVE_YOUR_GOOD = "REMOVE_YOUR_GOOD";
export const UPDATE_YOUR_GOOD = "UPDATE_YOUR_GOOD";

export const addYourGood = good => {
    return {
        type: ADD_YOUR_GOOD,
        good
    };
};

export const removeYourGood = id => {
    return {
        type: REMOVE_YOUR_GOOD,
        id
    };
};

export const updateYourGood = updatedGood => {
    return {
        type: UPDATE_YOUR_GOOD,
        updatedGood
    };
};
