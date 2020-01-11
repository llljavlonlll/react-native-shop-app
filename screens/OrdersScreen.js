import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    ScrollView,
    ActivityIndicator
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

import { loadOrders } from "../store/actions/orders";
import OrderItem from "../components/OrderItem";
import Colors from "../constants/Colors";

const OrdersScreen = () => {
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        setIsLoading(true);
        dispatch(loadOrders()).then(res => setIsLoading(false));
    }, [dispatch]);

    // Get piece of the global state
    const orders = useSelector(state => state.orders.orders);

    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color={Colors.accent} />
            </View>
        );
    }

    if (orders.length === 0) {
        return (
            <View style={styles.centered}>
                <Text style={{ color: Colors.subtitle }}>
                    You don't have any orders yet
                </Text>
            </View>
        );
    }

    return (
        <ScrollView
            style={styles.screen}
            contentContainerStyle={{ alignItems: "center", paddingBottom: 30 }}
        >
            {orders.map((order, index) => (
                <OrderItem {...order} key={index} />
            ))}
        </ScrollView>
    );
};

OrdersScreen.navigationOptions = navData => {
    return {
        headerTitle: "Orders",
        headerTitleStyle: {
            fontFamily: "open-sans-bold",
            fontSize: 20
        },
        headerLeft: (
            <TouchableOpacity
                style={{ marginLeft: 15 }}
                onPress={() => {
                    navData.navigation.toggleDrawer();
                }}
            >
                <Feather name="menu" size={30} color="black" />
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,

        backgroundColor: Colors.primary
    },
    centered: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default OrdersScreen;
