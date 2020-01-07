import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { addYourGood, updateYourGood } from "../store/actions/goods";

import SansBoldText from "../components/SansBoldText";
import Colors from "../constants/Colors";
import HeroButton from "../components/HeroButton";

const FormInput = props => (
    <View style={styles.formInput}>
        <SansBoldText style={{ color: Colors.subtitle, marginBottom: 5 }}>
            {props.title}
        </SansBoldText>
        <TextInput
            multiline={props.multiline}
            numberOfLines={props.multiline && 2}
            placeholder={props.placeholder}
            style={{
                borderBottomWidth: 1,
                borderBottomColor: Colors.borderColor,
                fontSize: 20,
                paddingBottom: 10,
                paddingHorizontal: 10,
                color: Colors.title,
                fontFamily: "open-sans",
                marginBottom: 20
            }}
            value={props.value}
            onChangeText={text => props.handleChange(text)}
        />
    </View>
);

const AddEditGoodScreen = props => {
    const item = props.navigation.getParam("item");

    const [title, setTitle] = useState(item ? item.title : "");
    const [author, setAuthor] = useState(item ? item.author : "");
    const [description, setDescription] = useState(
        item ? item.description : ""
    );
    const [imageUrl, setImageUrl] = useState(item ? item.imageUrl : "");
    const [difficulty, setDifficulty] = useState(item ? item.difficulty : "");
    const [time, setTime] = useState(item ? item.time.toString() : "");
    const [ingredients, setIngredients] = useState(
        item ? item.ingredients.join(",\n") : ""
    );
    const [directions, setDirections] = useState(
        item ? item.directions.join(",\n") : ""
    );
    const [price, setPrice] = useState(item ? item.price.toString() : "");

    const dispatch = useDispatch();

    const onSubmit = () => {
        const newGood = {
            id: item ? item.id : Math.round(Math.random() + 10000).toString(),
            title,
            author,
            rating: item ? item.rating : 5,
            description,
            imageUrl,
            difficulty,
            time: parseInt(time),
            ingredients: ingredients.split(",\n"),
            directions: directions.split(",\n"),
            price: parseFloat(price),
            owner: "o1"
        };

        // If updating or adding new product
        if (item) {
            dispatch(updateYourGood(newGood));
        } else {
            dispatch(addYourGood(newGood));
        }

        props.navigation.goBack();
    };

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
                        handleChange={setTitle}
                        value={title}
                        title="Title"
                        placeholder="Enter product title"
                    />
                    <FormInput
                        handleChange={setAuthor}
                        value={author}
                        title="Author"
                        placeholder="Enter author name"
                    />
                    <FormInput
                        handleChange={setDescription}
                        value={description}
                        title="Description"
                        multiline={true}
                        placeholder="Enter Description"
                    />
                    <FormInput
                        handleChange={setImageUrl}
                        value={imageUrl}
                        title="Image URL"
                        placeholder="Enter image URL"
                    />
                    <FormInput
                        handleChange={setDifficulty}
                        value={difficulty}
                        title="Difficulty"
                        placeholder="Hard, Medium or Easy"
                    />
                    <FormInput
                        handleChange={setTime}
                        value={time}
                        title="How many minutes?"
                        placeholder="Time in minutes"
                    />
                    <FormInput
                        handleChange={setIngredients}
                        value={ingredients}
                        title="Ingredients"
                        placeholder="Separate with comma"
                        multiline={true}
                    />
                    <FormInput
                        handleChange={setDirections}
                        value={directions}
                        title="Directions"
                        placeholder="Enter directions"
                        multiline={true}
                    />
                    <FormInput
                        handleChange={setPrice}
                        value={price}
                        title="Price"
                        placeholder="Enter price"
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
    return {
        headerRight: isUpdate ? (
            <TouchableOpacity style={{ marginRight: 15 }} onPress={() => {}}>
                <Feather name="save" size={30} color="black" />
            </TouchableOpacity>
        ) : (
            <TouchableOpacity style={{ marginRight: 15 }} onPress={() => {}}>
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
