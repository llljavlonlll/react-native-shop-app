import React from "react";
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
    Dimensions
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import SansText from "./SansText";
import SansBoldText from "./SansBoldText";
import dishImages from "../assets/dishes/dishImages";
import Colors from "../constants/Colors";

const CardView = props => {
    const rating = [];

    for (let i = 0; i < props.rating; i++) {
        rating.push(true);
    }
    for (let i = 0; i < 5 - props.rating; i++) {
        rating.push(false);
    }

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={styles.card}
            onPress={props.onTouch}
        >
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={dishImages[props.imageUrl]}
                />
            </View>
            <View style={styles.descriptionContainer}>
                <View style={styles.description}>
                    <SansBoldText style={styles.title}>
                        {props.title}
                    </SansBoldText>
                    <SansBoldText style={styles.author}>
                        {props.author}
                    </SansBoldText>
                    <View style={styles.rating}>
                        <View style={styles.stars}>
                            {rating.map((star, index) => {
                                return star ? (
                                    <FontAwesome
                                        name="star"
                                        size={16}
                                        color={Colors.starPositive}
                                        style={{ marginRight: 4 }}
                                        key={index}
                                    />
                                ) : (
                                    <FontAwesome
                                        name="star"
                                        size={16}
                                        color={Colors.starNegative}
                                        style={{ marginRight: 4 }}
                                        key={index}
                                    />
                                );
                            })}
                        </View>
                        <SansText style={styles.ratingText}>
                            ({props.rating} of 5)
                        </SansText>
                    </View>
                </View>
                <View style={styles.buttons}>{props.children}</View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: "90%",
        height: Dimensions.get("window").height / 3,
        backgroundColor: "white",
        borderRadius: 10,
        overflow: "hidden",
        elevation: 5,
        marginTop: 20
    },
    imageContainer: {
        height: "55%"
    },
    image: {
        height: "100%",
        width: "100%"
    },
    descriptionContainer: {
        height: "45%",
        width: "100%",
        backgroundColor: "white",
        paddingVertical: 15,
        paddingHorizontal: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    description: {
        flex: 1,
        justifyContent: "space-between"
    },
    title: {
        fontSize: Dimensions.get("window").width > 411 ? 17 : 13,
        color: Colors.title
    },
    author: {
        fontSize: Dimensions.get("window").width > 411 ? 13 : 11,
        color: Colors.subtitle
    },
    rating: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8
    },
    stars: {
        flexDirection: "row"
    },
    ratingText: {
        fontSize: Dimensions.get("window").width > 411 ? 13 : 11,
        color: "#999",
        marginLeft: 10
    },

    buttons: {
        height: "100%",
        justifyContent: "space-between",
        alignItems: "flex-end",
        paddingTop: 3
    }
});

export default CardView;
