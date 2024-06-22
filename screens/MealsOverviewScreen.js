import React, { useEffect } from "react";
import {
    FlatList,
    Image,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealCard from "../components/MealCard";

const MealsOverviewScreen = ({ route, navigation }) => {
    const { params } = route;
    const { category } = params;

    useEffect(() => {
        navigation.setOptions({
            title: category.title,
        });
    }, [navigation, category]);

    return (
        <FlatList
            style={styles.mealsOverviewList}
            data={filterMealsByCategoryId(MEALS)}
            renderItem={renderMealCard}
            keyExtractor={(meal) => `mealCard${meal.id}`}
        />
    );

    function filterMealsByCategoryId(meals) {
        const { id: categoryId } = category;

        const filteredMeals = meals.filter((meal) =>
            meal.categoryIds.includes(categoryId)
        );

        return filteredMeals;
    }

    function renderMealCard({ item: meal }) {
        return (
            <MealCard
                meal={meal}
                onPress={() =>
                    navigation.navigate("mealsRecipe", {
                        meal,
                        categoryTitle: category.title
                    })
                }
            />
        );
    }
};

const styles = StyleSheet.create({
    mealsOverviewList: {
        marginHorizontal: 10,
        marginTop: 26,
    },
});

export default MealsOverviewScreen;
