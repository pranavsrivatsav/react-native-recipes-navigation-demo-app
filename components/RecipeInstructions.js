import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RecipeInstructions = ({ meal }) => {
    return (
        <View>
            {meal.steps.map((step, index) => renderRecipeStep(step, index + 1))}
        </View>
    );

    function renderRecipeStep(step, stepNumber) {
        return (
            <View
                id={"recipeStep-" + stepNumber}
                style={styles.recipeStepContainer}
            >
                <Text style={styles.recipeStepNumber}>{stepNumber}.</Text>
                <Text style={styles.recipeStep}>{step}</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    recipeStepContainer: {
        flexDirection: "row",
    },
    recipeStepNumber: {
        width: 24,
        color: "black",
        textAlign: "left",
        fontSize: 18,
        fontWeight: "500",
    },
    recipeStep: {
        flex: 1,
        fontSize: 18,
        fontWeight: "400",
    },
});

export default RecipeInstructions;
