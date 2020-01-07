import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Animated } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import SansText from "../components/SansText";
import SansBoldText from "../components/SansBoldText";
import { TouchableOpacity } from "react-native-gesture-handler";

import { GOODS } from "../data/dummy-data";

const OrderItem = props => {
    const [animation] = useState(new Animated.Value(120));
    const [expanded, setExpanded] = useState(false);
    const [minHeight, setMinHeight] = useState(0);
    const [maxHeight, setMaxHeight] = useState(0);

    const _setMinHeight = event => {
        setMinHeight(event.nativeEvent.layout.height);
    };

    const _setMaxHeight = event => {
        setMaxHeight(event.nativeEvent.layout.height);
    };

    const toggle = () => {
        let initialValue = expanded ? minHeight + maxHeight : minHeight,
            finalValue = expanded ? minHeight : minHeight + maxHeight;

        setExpanded(prevState => !prevState);

        animation.setValue(initialValue);
        Animated.spring(animation, {
            toValue: finalValue
        }).start();
    };

    return (
        <Animated.View style={{ ...styles.card, height: animation }}>
            <TouchableOpacity activeOpacity={0.5} onPress={toggle}>
                <View style={styles.content} onLayout={_setMinHeight}>
                    <View style={styles.imageAndTitle}>
                        <View style={styles.imageContainer}>
                            <MaterialCommunityIcons
                                name="clipboard-text-outline"
                                size={80}
                                color="#c2c2c2"
                            />
                        </View>
                        <View style={styles.title}>
                            <SansText style={styles.date}>
                                {props.date}
                            </SansText>
                            <SansBoldText>Order ID: {props.id}</SansBoldText>
                            <View style={styles.status}>
                                <FontAwesome
                                    name="circle"
                                    size={8}
                                    style={styles.dot}
                                />
                                <SansText style={styles.statusText}>
                                    {props.status}
                                </SansText>
                            </View>
                        </View>
                    </View>
                    <View style={styles.priceAndDetail}>
                        <SansText style={styles.price}>
                            ${props.price.total}
                        </SansText>
                        <FontAwesome
                            name={expanded ? "chevron-up" : "chevron-down"}
                            size={20}
                            color={Colors.accent}
                        />
                    </View>
                </View>

                <View style={styles.details} onLayout={_setMaxHeight}>
                    {props.goods.map((good, index) => {
                        return (
                            <View style={styles.detailsItem} key={index}>
                                <SansText>{good.title}</SansText>
                                <SansText>${good.price}</SansText>
                            </View>
                        );
                    })}
                </View>
            </TouchableOpacity>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: "90%",
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 5,
        overflow: "hidden",
        marginTop: 20
    },
    content: {
        paddingHorizontal: 15,
        paddingRight: 25,
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    imageAndTitle: {
        height: "100%",
        flexDirection: "row"
    },
    imageContainer: {
        marginRight: 20
    },
    title: {
        justifyContent: "space-between",
        paddingVertical: 5
    },
    date: { color: Colors.subtitle },
    status: {
        flexDirection: "row",
        alignItems: "center"
    },
    dot: {
        marginRight: 10,
        color: "#99CA8A"
    },
    statusText: { color: "#99CA8A" },
    priceAndDetail: {
        justifyContent: "space-between",
        alignItems: "flex-end",
        paddingVertical: 5
    },
    price: {
        color: Colors.subtitle
    },
    detailText: {
        color: Colors.accent
    },
    details: {
        alignItems: "center",
        padding: 20,
        paddingHorizontal: 40
    },
    detailsItem: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: Colors.borderColor,
        borderBottomWidth: 1,
        marginBottom: 20
    }
});

export default OrderItem;
