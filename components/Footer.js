import React from "react";
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { useDispatch } from "react-redux";

import { addToCart } from "../store/actions/cart";
import Colors from "../constants/Colors";
import SansText from "./SansText";
import SansBoldText from "./SansBoldText";
import HeroButton from "./HeroButton";

const Footer = props => {
    const dispatch = useDispatch();
    return (
        <View style={styles.footer}>
            <View style={styles.footerDetails}>
                <View style={styles.footerItem}>
                    <SansBoldText style={styles.footerValue}>
                        {props.difficulty}
                    </SansBoldText>
                    <SansText style={styles.footerDefinition}>Level</SansText>
                </View>
                <View style={styles.footerItem}>
                    <SansBoldText style={styles.footerValue}>
                        {props.time}
                    </SansBoldText>
                    <SansText style={styles.footerDefinition}>Minutes</SansText>
                </View>
            </View>
            <HeroButton onPress={() => dispatch(addToCart(props.id))}>
                ADD TO CART
            </HeroButton>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        height: 70,
        backgroundColor: "white",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 15,
        paddingHorizontal: 25,
        elevation: 5
    },
    footerDetails: {
        flexDirection: "row"
    },
    footerItem: {
        marginRight: 30
    },
    footerValue: {
        color: Colors.title
    },
    footerDefinition: {
        color: Colors.subtitle
    }
});

export default Footer;
