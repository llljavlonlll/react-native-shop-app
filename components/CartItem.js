import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import SansBoldText from "../components/SansBoldText";
import SansText from "../components/SansText";
import Colors from "../constants/Colors";
import dishImages from "../assets/dishes/dishImages";
import { addToCart, removeSingle, removeAll } from "../store/actions/cart";

const CartItem = props => {
    const { good } = props;
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(addToCart(good.id));
    };

    const decrement = () => {
        dispatch(removeSingle(good.id));
    };

    const remove = () => {
        dispatch(removeAll(good.id));
    };
    return (
        <View style={styles.cartItemContainer}>
            <TouchableOpacity
                style={styles.deleteButton}
                activeOpacity={0.5}
                onPress={remove}
                hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
            >
                <AntDesign name="closecircle" size={24} color={Colors.delete} />
            </TouchableOpacity>
            <View style={styles.cartItem}>
                <View style={styles.itemImage}>
                    <Image
                        style={styles.image}
                        source={dishImages[good.imageUrl]}
                    />
                </View>
                <View style={styles.itemData}>
                    <View style={styles.itemTitleAndQuantity}>
                        <View>
                            <SansBoldText style={styles.itemTitle}>
                                {good.title}
                            </SansBoldText>
                            <SansBoldText style={styles.itemPrice}>
                                {good.price}
                            </SansBoldText>
                        </View>
                        <View style={styles.itemQuantity}>
                            <TouchableOpacity
                                style={styles.quantityIncrement}
                                onPress={increment}
                                hitSlop={{
                                    top: 15,
                                    left: 15,
                                    bottom: 15,
                                    right: 15
                                }}
                            >
                                <AntDesign
                                    name="pluscircle"
                                    size={24}
                                    color={Colors.accent}
                                />
                            </TouchableOpacity>
                            <SansText style={styles.quantity}>
                                {props.count}
                            </SansText>
                            <TouchableOpacity
                                style={styles.quantityIncrement}
                                onPress={decrement}
                                hitSlop={{
                                    top: 15,
                                    left: 15,
                                    bottom: 15,
                                    right: 15
                                }}
                            >
                                <AntDesign
                                    name="minuscircle"
                                    size={24}
                                    color={Colors.accent}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.itemDescription}>
                        <SansText
                            style={styles.itemDescriptionText}
                            numberOfLines={2}
                        >
                            {good.description}
                        </SansText>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cartItemContainer: {
        height: 120,
        width: "100%",
        padding: 15
    },
    cartItem: {
        height: 100,
        width: "100%",
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: "white",
        elevation: 5
    },
    deleteButton: {
        position: "absolute",
        zIndex: 1,
        top: 2,
        left: 11,
        backgroundColor: "white",
        borderRadius: 50,
        elevation: 6
    },
    itemImage: {
        width: "25%",
        height: "100%",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: "100%"
    },
    itemData: {
        width: "75%",
        height: "100%",
        padding: 8
    },
    itemTitleAndQuantity: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    itemTitle: {
        color: Colors.title,
        fontSize: 17
    },
    itemPrice: {
        fontSize: 11,
        color: Colors.accent
    },
    itemQuantity: {
        flexDirection: "row",
        alignItems: "center"
    },
    quantity: {
        marginHorizontal: 10,
        fontSize: 12
    },
    itemDescription: {
        marginTop: 8
    },
    itemDescriptionText: {
        fontSize: 10,
        color: Colors.subtitle
    }
});

export default CartItem;
