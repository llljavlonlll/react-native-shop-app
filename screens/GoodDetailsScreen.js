import React, { useState } from "react";
import {
    View,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Dimensions
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import Colors from "../constants/Colors";
import SansText from "../components/SansText";
import SansBoldText from "../components/SansBoldText";
import Footer from "../components/Footer";
import dishImages from "../assets/dishes/dishImages";

const TabContent = props => {
    if (props.tab === "detail") {
        return (
            <View style={styles.tabContent}>
                <View style={styles.tabImage}>
                    <Image
                        source={dishImages[props.good.imageUrl]}
                        style={styles.image}
                    />
                </View>

                <View style={styles.tabTextContainer}>
                    <SansText style={styles.tabText}>
                        {props.good.description}
                    </SansText>
                </View>
            </View>
        );
    } else if (props.tab === "ingredients") {
        return (
            <View style={styles.tabTextContainer}>
                {props.good.ingredients.map((item, index) => (
                    <SansText style={styles.ingredient} key={index}>
                        {index + 1}
                        {"- "}
                        {item}
                    </SansText>
                ))}
            </View>
        );
    } else {
        return (
            <View style={styles.tabTextContainer}>
                {props.good.directions.map((item, index) => (
                    <SansText style={styles.ingredient} key={index}>
                        {`Step ${index + 1}`}
                        {"-  "}
                        {item}
                    </SansText>
                ))}
            </View>
        );
    }
};

const GoodDetailsScreen = props => {
    const [selectedTab, setSelectedTab] = useState("detail");

    const goodsFromState = useSelector(state => state.goods.goods);

    const good = goodsFromState.find(
        item => item.id === props.navigation.getParam("goodId")
    );

    const rating = props.navigation.getParam("rating");

    const onSelectTab = tab => {
        setSelectedTab(tab);
    };

    return (
        <View style={styles.screen}>
            <ScrollView style={styles.details}>
                <View style={styles.head}>
                    <View style={styles.firstRow}>
                        <SansBoldText style={styles.firstRowText}>
                            {good.title}
                        </SansBoldText>
                        <TouchableOpacity>
                            <FontAwesome
                                name="bookmark-o"
                                size={22}
                                style={{ marginRight: 4 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.secondRow}>
                        <SansBoldText style={styles.secondRowText}>
                            {good.author}
                        </SansBoldText>
                    </View>
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
                            ({good.rating} of 5)
                        </SansText>
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={styles.tabs}>
                        <View style={styles.tabTitlesContainer}>
                            <TouchableOpacity
                                onPress={() => onSelectTab("detail")}
                            >
                                <SansBoldText
                                    style={
                                        selectedTab === "detail"
                                            ? styles.selected
                                            : styles.tabTitle
                                    }
                                >
                                    Detail
                                </SansBoldText>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => onSelectTab("ingredients")}
                            >
                                <SansBoldText
                                    style={
                                        selectedTab === "ingredients"
                                            ? styles.selected
                                            : styles.tabTitle
                                    }
                                >
                                    Ingredients
                                </SansBoldText>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => onSelectTab("directions")}
                            >
                                <SansBoldText
                                    style={
                                        selectedTab === "directions"
                                            ? styles.selected
                                            : styles.tabTitle
                                    }
                                >
                                    Directions
                                </SansBoldText>
                            </TouchableOpacity>
                        </View>

                        <TabContent good={good} tab={selectedTab} />
                    </View>
                </View>
            </ScrollView>
            <Footer
                difficulty={good.difficulty}
                time={good.time}
                id={good.id}
            />
        </View>
    );
};

GoodDetailsScreen.navigationOptions = {
    headerTitle: "Description",
    headerTitleStyle: {
        fontFamily: "open-sans-bold",
        fontSize: 20
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    details: {
        backgroundColor: Colors.primary,
        width: "100%"
    },
    head: {
        padding: 20,
        width: "100%"
    },
    firstRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10
    },
    firstRowText: {
        fontSize: 18,
        color: Colors.title
    },
    secondRow: {
        marginBottom: 10
    },
    secondRowText: {
        fontSize: 12,
        color: Colors.subtitle
    },
    rating: {},
    stars: {
        flexDirection: "row"
    },
    ratingText: {
        fontSize: 12,
        color: Colors.subtitle
    },
    tabTitlesContainer: {
        flexDirection: "row",
        paddingHorizontal: 20
    },
    tabTitle: {
        marginRight: 30,
        fontSize: 14,
        color: Colors.subtitle,
        paddingVertical: 8,
        marginBottom: 8
    },
    selected: {
        marginRight: 30,
        fontSize: 14,
        color: Colors.subtitle,
        paddingVertical: 8,
        marginBottom: 8,
        color: Colors.accent,
        borderBottomWidth: 3,
        borderBottomColor: Colors.accent
    },
    tabImage: {
        height: Dimensions.get("window").height / 3
    },
    image: {
        height: "100%",
        width: "100%"
    },
    tabTextContainer: {
        padding: 20
    },
    tabText: {
        lineHeight: 20,
        color: Colors.title
    },
    ingredient: {
        marginBottom: 10
    }
});

export default GoodDetailsScreen;
