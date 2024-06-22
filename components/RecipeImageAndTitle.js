import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const RecipeImageAndTitle = ({meal}) => {
    return (
        <View style={styles.mealImageAndTitleContainer}>
            <View>
                <Image
                    style={styles.mealImage}
                    source={{
                        uri: meal.imageUrl,
                    }}
                />
            </View>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>{meal.title}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mealImageAndTitleContainer: {
        borderRadius: 5,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "black",
    },
    title: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
    },
    titleContainer: {
        borderTopWidth: 2,
        borderColor: "black",
        backgroundColor: "#B6D131",
        paddingVertical: 8,
    },
    mealImage: {
        width: "100%",
        height: 250,
    },
    mealImageContainer: {},
});

export default RecipeImageAndTitle;
