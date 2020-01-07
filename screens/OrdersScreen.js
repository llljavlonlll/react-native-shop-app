import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    ScrollView
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import OrderItem from "../components/OrderItem";
import Colors from "../constants/Colors";

const OrdersScreen = () => {
    // Get piece of the global state
    const orders = useSelector(state => state.orders.orders);

    if (orders.length === 0) {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
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
    }
});

export default OrdersScreen;
