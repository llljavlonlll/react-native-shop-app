import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import SansBoldText from "./SansBoldText";
import Colors from "../constants/Colors";

const HeroButton = props => {
    return (
        <TouchableOpacity
            {...props}
            style={{ ...styles.button, ...props.style }}
        >
            <SansBoldText style={styles.buttonText}>
                {props.children}
            </SansBoldText>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        overflow: "hidden",
        backgroundColor: Colors.accent,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20
    },
    buttonText: {
        color: "white",
        fontSize: 16
    }
});

export default HeroButton;
