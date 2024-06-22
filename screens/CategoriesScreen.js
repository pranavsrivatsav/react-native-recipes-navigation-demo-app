import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList, StyleSheet, Text, View } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

const Categories = ({ navigation }) => {
    return (
        <FlatList
            data={CATEGORIES}
            renderItem={renderCategoryTile}
            keyExtractor={(category) => category.id}
            numColumns={2}
        />
    );

    function renderCategoryTile({ item: category }) {
        return (
            <CategoryGridTile
                category={category}
                onPress={() => {
                    categoryTileOnPressHandler(category);
                }}
            />
        );
    }

    function categoryTileOnPressHandler(category) {
        navigation.navigate("mealsOverview", { category });
    }
};

const styles = StyleSheet.create({});

export default Categories;
