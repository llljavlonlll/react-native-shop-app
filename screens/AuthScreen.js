import React, { useState } from "react";
import {
    ScrollView,
    View,
    KeyboardAvoidingView,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
    Text
} from "react-native";
import { useDispatch } from "react-redux";

import { signup } from "../store/actions/auth";
import Colors from "../constants/Colors";
import SansText from "../components/SansText";
import FormInput from "../components/FormInput";
import HeroButton from "../components/HeroButton";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onChangeText = (inputIdentifier, text) => {
        if (inputIdentifier === "username") {
            setUsername(text);
        } else {
            setPassword(text);
        }
    };

    return (
        <View style={styles.formContainer}>
            <FormInput
                title="Email or Username"
                placeholder="Enter your email or username"
                value={username}
                handleChange={onChangeText}
                inputIdentifier="username"
                inputStyle={styles.inputStyle}
                keyboardType="email-address"
                required
                autoCorrect={false}
                autoCapitalize="none"
            />
            <FormInput
                title="Password"
                placeholder="Enter your password"
                value={password}
                handleChange={onChangeText}
                inputIdentifier="password"
                inputStyle={styles.inputStyle}
                secureTextEntry
                required
                autoCorrect={false}
                autoCapitalize="none"
            />
            <HeroButton style={styles.button}>Login</HeroButton>
            <View
                style={{
                    flexDirection: "row",
                    alignSelf: "center",
                    marginTop: 10
                }}
            >
                <SansText>Don't have an account? </SansText>
                <TouchableOpacity>
                    <SansText
                        style={{
                            color: Colors.title,
                            marginLeft: 5
                        }}
                    >
                        Sign Up
                    </SansText>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const AuthScreen = () => {
    const dispatch = useDispatch();

    const signUpHandler = () => {
        dispatch(signup());
    };
    return (
        <View style={{ flex: 1 }}>
            <KeyboardAvoidingView style={styles.screen} behavior="position">
                <View style={styles.logoContainer}>
                    <Image
                        source={require("../assets/logo.png")}
                        style={styles.image}
                    />
                    <SansText style={styles.logoText}>
                        Create and sell your awesome recipes
                    </SansText>
                </View>
                <LoginForm />
            </KeyboardAvoidingView>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        height: "100%",
        backgroundColor: Colors.primary,
        justifyContent: "space-between",
        paddingBottom: 50
    },
    logoContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: "60%"
    },
    logoText: {
        width: 200,
        textAlign: "center",
        color: Colors.title,
        opacity: 0.8,
        fontSize: 20
    },
    image: {
        width: 200,
        height: 200
    },
    formContainer: {
        backgroundColor: "transparent",
        height: "40%",
        paddingHorizontal: Dimensions.get("window").width < 410 ? 25 : 35
    },
    button: {
        width: "70%",
        alignSelf: "center",
        paddingVertical: 10,
        elevation: 5,
        marginTop: Dimensions.get("window").width < 410 ? 5 : 10
    },
    inputStyle: {
        backgroundColor: "white",
        fontSize: Dimensions.get("window").width < 410 ? 14 : 18,
        paddingVertical: Dimensions.get("window").width < 410 ? 5 : 10,
        borderRadius: 50,
        paddingHorizontal: 20,
        marginBottom: Dimensions.get("window").width < 410 ? 5 : 20
    }
});

export default AuthScreen;
