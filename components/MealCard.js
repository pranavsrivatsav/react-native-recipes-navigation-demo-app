import React from "react";
import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";

const MealCard = ({meal, onPress, imageProps = {}}) => {
    return (
        <Pressable
            onPress={onPress}
            android_ripple={{ color: "#ccc" }}
            style={({ pressed }) => [
                pressed
                    ? [
                          styles.mealCardContainer,
                          styles.mealCardContainerPressed,
                      ]
                    : styles.mealCardContainer,
            ]} //the pressed style for ios
        >
            <Image
                style={[styles.mealImage, imageProps]}
                source={{
                    uri: meal.imageUrl,
                }}
            />
            <View style={styles.mealTitleContainer}>
                <Text style={styles.mealTitle}>{meal.title}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    mealImage: {
        width: "100%",
        height: 200,
    },
    mealTitleContainer: {
        backgroundColor: "#B27015",
        padding: 8,
    },
    mealTitle: {
        textAlign: "center",
        fontWeight: "bold",
        color: "#FFFFFF",
        fontSize: 18
    },
    mealCardContainer: {
        marginBottom: 20,
        marginHorizontal: 10,
        borderRadius: 8,
        borderColor: "#B27015",
        borderWidth: 0.5,
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: "0.25",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: "hidden",
    },
    mealCardContainerPressed: {
        opacity: Platform.OS === "android" ? 0.9 : 0.5,
    },
});
export default MealCard;
