import React, { useState } from "react";

import * as Font from "expo-font";
import { AppLoading } from "expo";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import cartReducer from "./store/reducers/cart";
import ordersReducer from "./store/reducers/orders";
import goodsReducer from "./store/reducers/goods";

import ShopNavigator from "./navigation/ShopNavigator";

const rootReducer = combineReducers({
    cart: cartReducer,
    orders: ordersReducer,
    goods: goodsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const fetchFonts = () => {
    return Font.loadAsync({
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
    });
};

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    if (!fontsLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setFontsLoaded(true)}
            />
        );
    }
    return (
        <Provider store={store}>
            <ShopNavigator />
        </Provider>
    );
}
