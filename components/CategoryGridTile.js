import React from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

const CategoryGridTile = ({ category, onPress }) => {
    return (
        <View style={[styles.categoryTileContainer]}>
            <Pressable
                android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => [
                    styles.pressableButton,
                    { backgroundColor: category.color },
                    pressed ? styles.pressedButton : null,
                ]} //the pressed style for ios
                onPress={onPress}
            >
                <View style={styles.categoryTile}>
                    <Text style={styles.categoryTitle}>{category.title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    categoryTileContainer: {
        flex: 1,
        overflow: Platform.OS === "android" ? "hidden" : "visible", //To make sure the ripple effect does not go outside the element - which it does on android, and we make it visible for ios because otherwise the shadow effect will not be visible
    },
    pressableButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        margin: 20,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: "0.25",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    pressedButton: {
        opacity: Platform.OS === "android" ? 0.9 : 0.5,
    },
    categoryTile: {
        padding: 16,
    },
    categoryTitle: {
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default CategoryGridTile;
