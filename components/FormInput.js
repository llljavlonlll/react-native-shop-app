import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

import SansBoldText from "./SansBoldText";
import Colors from "../constants/Colors";

const FormInput = props => (
    <View>
        <SansBoldText style={{ color: Colors.subtitle, marginBottom: 5 }}>
            {props.title}
        </SansBoldText>
        <TextInput
            // keyboardType={props.keyboardType}
            // multiline={props.multiline}
            // numberOfLines={props.multiline && 2}
            // placeholder={props.placeholder}
            // secureTextEntry={props.secureTextEntry}
            {...props}
            style={{ ...styles.input, ...props.inputStyle }}
            value={props.value}
            onChangeText={text =>
                props.handleChange(props.inputIdentifier, text)
            }
        />
    </View>
);

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.borderColor,
        fontSize: 20,
        paddingBottom: 10,
        paddingHorizontal: 10,
        color: Colors.title,
        fontFamily: "open-sans",
        marginBottom: 20
    }
});

export default FormInput;
