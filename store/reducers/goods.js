import { GOODS } from "../../data/dummy-data";
import {
    ADD_YOUR_GOOD,
    REMOVE_YOUR_GOOD,
    UPDATE_YOUR_GOOD
} from "../actions/goods";

const initialState = {
    goods: GOODS,
    yourGoods: GOODS.filter(good => good.owner === "o1")
};

const goodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_YOUR_GOOD: {
            const updatedGoods = state.goods.slice();
            updatedGoods.push(action.good);
            return {
                ...state,
                goods: updatedGoods,
                yourGoods: updatedGoods.filter(good => good.owner === "o1")
            };
        }
        case REMOVE_YOUR_GOOD: {
            const updatedGoods = state.goods.filter(
                good => good.id != action.id
            );
            return {
                ...state,
                goods: updatedGoods,
                yourGoods: updatedGoods.filter(good => good.owner === "o1")
            };
        }
        case UPDATE_YOUR_GOOD: {
            const goodIndex = state.goods.findIndex(
                good => good.id === action.updatedGood.id
            );
            // const updatedGoods = state.goods.filter(
            //     good => good.id != action.updatedGood.id
            // );
            const updatedGoods = state.goods.slice();
            updatedGoods[goodIndex] = action.updatedGood;

            // updatedGoods.push(action.updatedGood);
            return {
                ...state,
                goods: updatedGoods,
                yourGoods: updatedGoods.filter(good => good.owner === "o1")
            };
        }
        default:
            return state;
    }
};

export default goodsReducer;
