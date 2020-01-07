import React from "react";
import { StyleSheet, FlatList, TouchableOpacity, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Feather } from "@expo/vector-icons";

import CardView from "../components/CardView";
import Colors from "../constants/Colors";
import SansBoldText from "../components/SansBoldText";
import { addToCart } from "../store/actions/cart";

const GoodsScreen = props => {
    const goods = useSelector(state => state.goods.goods);

    const dispatch = useDispatch();

    return (
        <FlatList
            style={styles.screen}
            contentContainerStyle={styles.scrollContent}
            data={goods}
            renderItem={({ item }) => {
                const rating = [];

                for (let i = 0; i < item.rating; i++) {
                    rating.push(true);
                }
                for (let i = 0; i < 5 - item.rating; i++) {
                    rating.push(false);
                }

                const selectGood = () => {
                    props.navigation.navigate({
                        routeName: "GoodDetails",
                        params: {
                            goodId: item.id,
                            title: item.title,
                            rating: rating,
                            ratingScore: item.rating
                        }
                    });
                };

                return (
                    <CardView
                        {...item}
                        navigation={props.navigation}
                        onTouch={selectGood}
                    >
                        <TouchableOpacity
                            onPress={() => dispatch(addToCart(item.id))}
                            hitSlop={{
                                top: 20,
                                left: 20,
                                bottom: 20,
                                right: 20
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center"
                                }}
                            >
                                <SansBoldText
                                    style={{
                                        color: Colors.accent,
                                        fontSize: 16
                                    }}
                                >
                                    Add to bag
                                </SansBoldText>
                                <Feather
                                    name="plus"
                                    size={24}
                                    color={Colors.accent}
                                    style={{ marginLeft: 5 }}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={selectGood}
                            hitSlop={{
                                top: 20,
                                left: 20,
                                bottom: 20,
                                right: 20
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center"
                                }}
                            >
                                <SansBoldText
                                    style={{ color: Colors.subtitle }}
                                >
                                    Details
                                </SansBoldText>
                                <Feather
                                    name="clipboard"
                                    size={24}
                                    color={Colors.subtitle}
                                    style={{ marginLeft: 5 }}
                                />
                            </View>
                        </TouchableOpacity>
                    </CardView>
                );
            }}
            keyExtractor={item => item.id}
        />
    );
};

GoodsScreen.navigationOptions = navData => {
    return {
        headerTitle: "Popular Dishes",
        headerTitleStyle: {
            fontFamily: "open-sans-bold",
            fontSize: 20
        },
        headerRight: (
            <TouchableOpacity
                style={{ marginRight: 15 }}
                onPress={() => navData.navigation.navigate("Cart")}
                hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
            >
                <Feather name="shopping-bag" size={30} color="black" />
            </TouchableOpacity>
        ),
        headerLeft: (
            <TouchableOpacity
                style={{ marginLeft: 15 }}
                onPress={() => {
                    navData.navigation.toggleDrawer();
                }}
                hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
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
    scrollContent: {
        alignItems: "center",
        paddingBottom: 20
    }
});

export default GoodsScreen;
