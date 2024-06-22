import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RecipeAdditionalDetail = ({meal}) => {
    const additionalDetailsKey = [
        "isGlutenFree",
        "isVegan",
        "isVegetarian",
        "isLactoseFree",
    ];

    return (
        <View style={styles.additionalDetailsContainer}>
            {additionalDetailsKey.map((detail) =>
                renderAnAdditionalDetail(detail, meal[detail])
            )}
        </View>
    );

    function renderAnAdditionalDetail(detail, boolValue) {
        return (
            <View id={'additionalDetail-'+detail} style={styles.additionalDetailView}>
                <Text style={styles.additionalDetailKey}>{detail}: </Text>
                <Text style={styles.additionalDetailValue}>{`${
                    boolValue ? "Yes" : "No"
                }`}</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    additionalDetailsContainer: {
        marginTop: 10,
    },
    additionalDetailView: {
        flexDirection: "row",
    },
    additionalDetailKey: {
        fontSize: 18,
        fontWeight: "600",
    },
    additionalDetailValue: {
        fontSize: 18,
    },
});
export default RecipeAdditionalDetail;
