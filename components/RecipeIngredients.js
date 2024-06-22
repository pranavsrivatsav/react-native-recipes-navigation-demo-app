import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RecipeIngredients = ({meal}) => {
    return (
        <View style={styles.ingredientsTitleContainer}>
            <Text style={styles.ingredientsTitle}>Ingredients:</Text>
            <Text style={styles.ingredients}>
                {meal.ingredients.join(", ")}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    ingredientsTitle: {
        fontWeight: "bold",
        fontSize: 18,
    },
    ingredients: {
        fontSize: 17,
        fontWeight: "400",
    },
    ingredientsTitleContainer: {
        marginBottom: 10,
    },
})

export default RecipeIngredients;
