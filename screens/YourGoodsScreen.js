import React from "react";
import {
    StyleSheet,
    TouchableOpacity,
    FlatList,
    View,
    Alert
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Feather } from "@expo/vector-icons";

import CardView from "../components/CardView";
import Colors from "../constants/Colors";
import SansBoldText from "../components/SansBoldText";

import { removeYourGood } from "../store/actions/goods";

const YourGoodsScreen = props => {
    const goods = useSelector(state => state.goods.yourGoods);

    const dispatch = useDispatch();

    const editGood = item => {
        props.navigation.navigate("EditGood", { item });
    };

    const onDelete = id => {
        Alert.alert(
            "Are you sure?",
            "Do you really want to delete this product?",
            [
                { text: "No", style: "default" },
                {
                    text: "Yes",
                    style: "destructive",
                    onPress: () => {
                        dispatch(removeYourGood(id));
                    }
                }
            ]
        );
    };

    return (
        <FlatList
            style={styles.screen}
            contentContainerStyle={styles.scrollContent}
            data={goods}
            renderItem={({ item }) => (
                <CardView
                    {...item}
                    navigation={props.navigation}
                    onTouch={() => editGood(item)}
                >
                    <TouchableOpacity
                        onPress={() => editGood(item)}
                        hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center"
                            }}
                        >
                            <SansBoldText style={{ color: Colors.accent }}>
                                Edit
                            </SansBoldText>
                            <Feather
                                name="edit"
                                size={24}
                                color={Colors.accent}
                                style={{ marginLeft: 5 }}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onDelete(item.id)}
                        hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center"
                            }}
                        >
                            <SansBoldText style={{ color: Colors.subtitle }}>
                                Delete
                            </SansBoldText>
                            <Feather
                                name="delete"
                                size={24}
                                color={Colors.subtitle}
                                style={{ marginLeft: 5 }}
                            />
                        </View>
                    </TouchableOpacity>
                </CardView>
            )}
            keyExtractor={item => item.id}
        />
    );
};

YourGoodsScreen.navigationOptions = navData => {
    return {
        headerTitle: "Your Products",
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
        ),
        headerRight: (
            <TouchableOpacity
                style={{ marginRight: 15 }}
                onPress={() => {
                    navData.navigation.navigate("EditGood");
                }}
            >
                <Feather name="plus" size={30} color="black" />
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

export default YourGoodsScreen;
