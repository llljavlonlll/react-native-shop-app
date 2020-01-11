import Food from "../../models/food";

export const ADD_YOUR_GOOD = "ADD_YOUR_GOOD";
export const REMOVE_YOUR_GOOD = "REMOVE_YOUR_GOOD";
export const UPDATE_YOUR_GOOD = "UPDATE_YOUR_GOOD";
export const LOAD_GOODS = "LOAD_GOODS";

export const loadGoods = () => {
    return async dispatch => {
        try {
            const response = await fetch(
                "https://rn-shop-app-f0adc.firebaseio.com/goods.json"
            );

            if (!response.ok) {
                throw new Error("Something went wrong!");
            }

            const responseData = await response.json();
            const loadedGoods = [];

            for (const key in responseData) {
                loadedGoods.push(
                    new Food(
                        key,
                        responseData[key].title,
                        responseData[key].author,
                        responseData[key].rating,
                        responseData[key].description,
                        responseData[key].imageUrl,
                        responseData[key].difficulty,
                        responseData[key].time,
                        responseData[key].ingredients,
                        responseData[key].directions,
                        responseData[key].price,
                        responseData[key].owner
                    )
                );
            }

            dispatch({
                type: LOAD_GOODS,
                goods: loadedGoods
            });
        } catch (err) {
            throw err;
        }
    };
};

export const addYourGood = good => {
    return async dispatch => {
        const response = await fetch(
            "https://rn-shop-app-f0adc.firebaseio.com/goods.json",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(good)
            }
        );

        const responseData = await response.json();

        dispatch({
            type: ADD_YOUR_GOOD,
            good: {
                ...good,
                id: responseData.name
            }
        });
    };
};

export const removeYourGood = id => {
    return async dispatch => {
        const response = await fetch(
            `https://rn-shop-app-f0adc.firebaseio.com/goods/${id}.json`,
            {
                method: "DELETE"
            }
        );

        if (!response.ok) {
            throw new Error("Something went wrong!");
        }

        dispatch({
            type: REMOVE_YOUR_GOOD,
            id
        });
    };
};

export const updateYourGood = updatedGood => {
    return async dispatch => {
        const response = await fetch(
            `https://rn-shop-app-f0adc.firebaseio.com/goods/${updatedGood.id}.json`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedGood)
            }
        );

        if (!response.ok) {
            throw new Error("Something went wrong!");
        }

        dispatch({
            type: UPDATE_YOUR_GOOD,
            updatedGood
        });
    };
};
