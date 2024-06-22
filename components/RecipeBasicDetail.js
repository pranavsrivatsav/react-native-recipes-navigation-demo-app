import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { capitalize } from "../utils";

const RecipeBasicDetail = ({meal}) => {
    return (
        <View style={styles.basicDetailContainer}>
            <Text style={{ fontWeight: "500", fontSize: 18 }}>
                <Text>{capitalize(meal.affordability)} | </Text>
                <Text>{capitalize(meal.complexity)} | </Text>
                <Text>{meal.duration} Mins</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    basicDetailContainer: {
        marginVertical: 10,
        flexDirection: "row",
    },
})

export default RecipeBasicDetail;
