import Order from "../../models/order";

export const ADD_NEW_ORDER = "ADD_NEW_ORDER";
export const LOAD_ORDERS = "LOAD_ORDERS";

export const addNewOrder = order => {
    const id = Math.round(Math.random() * 1000000);
    return async dispatch => {
        const response = await fetch(
            "https://rn-shop-app-f0adc.firebaseio.com/orders/o1.json",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ ...order, id })
            }
        );

        if (!response.ok) {
            throw new Error("Something went wrong!");
        }

        dispatch({
            type: ADD_NEW_ORDER,
            order: {
                ...order,
                id
            }
        });
    };
};

export const loadOrders = () => {
    return async dispatch => {
        try {
            const response = await fetch(
                "https://rn-shop-app-f0adc.firebaseio.com/orders/o1.json"
            );

            if (!response.ok) {
                throw new Error("Something went wrong!");
            }

            const responseData = await response.json();
            const loadedOrders = [];

            for (const key in responseData) {
                loadedOrders.push(
                    new Order(
                        responseData[key].id,
                        responseData[key].date,
                        responseData[key].status,
                        responseData[key].goods,
                        responseData[key].price
                    )
                );
            }

            dispatch({
                type: LOAD_ORDERS,
                orders: loadedOrders
            });
        } catch (err) {
            throw err;
        }
    };
};
