import React, { useState } from "react";
import { View, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import Colors from "../constants/Colors";
import CartItem from "../components/CartItem";
import SansText from "../components/SansText";
import SansBoldText from "../components/SansBoldText";
import HeroButton from "../components/HeroButton";

import { addNewOrder } from "../store/actions/orders";
import { resetCart } from "../store/actions/cart";

const CartScreen = () => {
    const goods = useSelector(state => state.cart.goodsInTheCart);
    const price = useSelector(state => state.cart.price);

    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const uniqueGoods = goods
        .map(good => good.id)
        .map((id, index, self) => self.indexOf(id) === index && index)
        .filter(index => goods[index])
        .map(index => goods[index]);

    let items;

    if (isLoading) {
        items = (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <ActivityIndicator size="large" color={Colors.accent} />
            </View>
        );
    } else if (goods.length === 0) {
        items = (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <SansBoldText style={{ color: Colors.subtitle }}>
                    You have no items in the cart
                </SansBoldText>
            </View>
        );
    } else {
        items = (
            <ScrollView style={styles.cartItemsContainer}>
                {uniqueGoods.map((item, index) => (
                    <CartItem
                        key={index}
                        good={item}
                        count={goods.filter(good => good.id === item.id).length}
                    />
                ))}
            </ScrollView>
        );
    }

    const sendOrder = async () => {
        setIsLoading(true);
        await dispatch(
            addNewOrder({
                date: moment().format("MMM DD YY, h:mm a"),
                status: "Processing",
                goods: goods,
                price: price
            })
        );
        dispatch(resetCart());
        setIsLoading(false);
    };

    return (
        <View style={styles.screen}>
            {items}
            <View style={styles.footer}>
                <View>
                    <View style={styles.total}>
                        <SansText style={styles.totalText}>Subtotal</SansText>
                        <SansText>${price.subtotal}</SansText>
                    </View>
                    <View style={styles.total}>
                        <SansText style={styles.totalText}>Tax & Fees</SansText>
                        <SansText>${price.tax}</SansText>
                    </View>
                    <View style={styles.total}>
                        <SansText style={styles.totalText}>Delivery</SansText>
                        <SansText>
                            {!price.shipping ? "Free" : `$${price.shipping}`}
                        </SansText>
                    </View>
                    <View style={styles.total}>
                        <SansText style={styles.totalText}>Total</SansText>
                        <SansText>${price.total}</SansText>
                    </View>
                </View>
                <HeroButton style={styles.button} onPress={sendOrder}>
                    Checkout
                </HeroButton>
            </View>
        </View>
    );
};

CartScreen.navigationOptions = navData => {
    return {
        headerTitle: "Cart",
        headerTitleStyle: {
            fontFamily: "open-sans-bold",
            fontSize: 20
        }
    };
};

const styles = StyleSheet.create({
    screen: {
        width: "100%",
        height: "100%",
        backgroundColor: Colors.primary
    },
    cartItemsContainer: {
        height: "65%",
        width: "100%"
    },
    footer: {
        height: "35%",
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: "white",
        borderTopColor: Colors.borderColor,
        borderTopWidth: 1,
        justifyContent: "space-between",
        paddingBottom: 20
    },
    total: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10
    },
    totalText: {
        color: Colors.subtitle
    },
    button: {
        width: "70%",
        alignSelf: "center",
        paddingVertical: 12,
        paddingHorizontal: 15,
        marginTop: 10
    }
});

export default CartScreen;
