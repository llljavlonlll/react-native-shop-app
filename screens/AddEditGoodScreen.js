import React, { useEffect, useReducer, useCallback, useState } from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    KeyboardAvoidingView,
    Alert,
    ActivityIndicator
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { addYourGood, updateYourGood } from "../store/actions/goods";

import FormInput from "../components/FormInput";
import Colors from "../constants/Colors";
import HeroButton from "../components/HeroButton";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        };

        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        };

        let updatedFormIsValid = true;
        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
        }

        return {
            formIsValid: updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues
        };
    }
    return state;
};

const AddEditGoodScreen = props => {
    const item = props.navigation.getParam("item");

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            title: item ? item.title : "",
            author: item ? item.author : "",
            description: item ? item.description : "",
            imageUrl: item ? item.imageUrl : "",
            difficulty: item ? item.difficulty : "",
            time: item ? item.time.toString() : "",
            ingredients: item ? item.ingredients.join(",\n") : "",
            directions: item ? item.directions.join(",\n") : "",
            price: item ? item.price.toString() : ""
        },
        inputValidities: {
            title: item ? true : false,
            author: item ? true : false,
            description: item ? true : false,
            imageUrl: item ? true : false,
            difficulty: item ? true : false,
            time: item ? true : false,
            time: item ? true : false,
            ingredients: item ? true : false,
            directions: item ? true : false,
            price: item ? true : false
        },
        formIsValid: item ? true : false
    });

    const textChangeHandler = (inputIdentifier, text) => {
        let isValid = false;
        if (text.trim().length > 0) {
            isValid = true;
        }
        dispatchFormState({
            type: FORM_INPUT_UPDATE,
            value: text,
            isValid: isValid,
            input: inputIdentifier
        });
    };

    const dispatch = useDispatch();

    useEffect(() => {
        if (error) {
            Alert.alert("An error occured", error, [{ text: "Okay" }]);
        }
    }, [error]);

    const onSubmit = useCallback(async () => {
        if (!formState.formIsValid) {
            Alert.alert("Wrong input!", "Please check the errors in the form", [
                { text: "okay" }
            ]);

            return;
        }

        setError(null);
        setIsLoading(true);

        const newGood = {
            id: item ? item.id : undefined,
            title: formState.inputValues.title,
            author: formState.inputValues.author,
            rating: item ? item.rating : 5,
            description: formState.inputValues.description,
            imageUrl: formState.inputValues.imageUrl,
            difficulty: formState.inputValues.difficulty,
            time: parseInt(formState.inputValues.time),
            ingredients: formState.inputValues.ingredients.split(",\n"),
            directions: formState.inputValues.directions.split(",\n"),
            price: parseFloat(formState.inputValues.price),
            owner: "o1"
        };

        // If updating or adding new product
        try {
            if (item) {
                await dispatch(updateYourGood(newGood));
            } else {
                await dispatch(addYourGood(newGood));
            }

            props.navigation.goBack();
        } catch (err) {
            setError(err.message);
        }

        setIsLoading(false);
    }, [item, formState, dispatch]);

    useEffect(() => {
        props.navigation.setParams({ submit: onSubmit });
        return;
    }, [onSubmit]);

    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color={Colors.accent} />
            </View>
        );
    }

    return (
        <KeyboardAvoidingView
            style={styles.screen}
            enabled
            behavior="padding"
            keyboardVerticalOffset={80}
        >
            <ScrollView>
                <View style={styles.card}>
                    <FormInput
                        handleChange={textChangeHandler}
                        inputIdentifier="title"
                        value={formState.inputValues.title}
                        title="Title"
                        placeholder="Enter product title"
                    />
                    <FormInput
                        handleChange={textChangeHandler}
                        inputIdentifier="author"
                        value={formState.inputValues.author}
                        title="Author"
                        placeholder="Enter author name"
                    />
                    <FormInput
                        handleChange={textChangeHandler}
                        inputIdentifier="description"
                        value={formState.inputValues.description}
                        title="Description"
                        multiline={true}
                        placeholder="Enter Description"
                    />
                    <FormInput
                        handleChange={textChangeHandler}
                        inputIdentifier="imageUrl"
                        value={formState.inputValues.imageUrl}
                        title="Image URL"
                        placeholder="Enter image URL"
                    />
                    <FormInput
                        handleChange={textChangeHandler}
                        inputIdentifier="difficulty"
                        value={formState.inputValues.difficulty}
                        title="Difficulty"
                        placeholder="Hard, Medium or Easy"
                    />
                    <FormInput
                        handleChange={textChangeHandler}
                        inputIdentifier="time"
                        value={formState.inputValues.time}
                        title="How many minutes?"
                        placeholder="Time in minutes"
                        keyboardType="number-pad"
                    />
                    <FormInput
                        handleChange={textChangeHandler}
                        inputIdentifier="ingredients"
                        value={formState.inputValues.ingredients}
                        title="Ingredients"
                        placeholder="Separate with comma"
                        multiline={true}
                    />
                    <FormInput
                        handleChange={textChangeHandler}
                        inputIdentifier="directions"
                        value={formState.inputValues.directions}
                        title="Directions"
                        placeholder="Enter directions"
                        multiline={true}
                    />
                    <FormInput
                        handleChange={textChangeHandler}
                        inputIdentifier="price"
                        value={formState.inputValues.price}
                        title="Price"
                        placeholder="Enter price"
                        keyboardType="decimal-pad"
                    />
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <HeroButton style={styles.button} onPress={onSubmit}>
                    {item ? "Save" : "Add"}
                </HeroButton>
            </View>
        </KeyboardAvoidingView>
    );
};

AddEditGoodScreen.navigationOptions = navData => {
    const isUpdate = navData.navigation.getParam("item");
    const onSubmit = navData.navigation.getParam("submit");
    return {
        headerRight: isUpdate ? (
            <TouchableOpacity style={{ marginRight: 15 }} onPress={onSubmit}>
                <Feather name="save" size={30} color="black" />
            </TouchableOpacity>
        ) : (
            <TouchableOpacity style={{ marginRight: 15 }} onPress={onSubmit}>
                <Feather name="plus" size={30} color="black" />
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    screen: {
        flex: 1,
        backgroundColor: Colors.primary
    },
    card: {
        margin: 15,
        backgroundColor: "white",
        padding: 15,
        borderRadius: 10,
        paddingBottom: 60,
        elevation: 5
    },
    buttonContainer: {
        position: "absolute",
        bottom: "5%",
        left: "28%",
        borderRadius: 50
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 70,
        elevation: 6
    }
});

export default AddEditGoodScreen;
