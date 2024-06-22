import React, { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealCard from "../components/MealCard";
import { useSelector } from "react-redux";

const FavoritesScreen = ({ navigation }) => {
  // const favoritesCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favorites.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    // favoritesCtx.ids.includes(meal.id)
    favoriteMealIds.includes(meal.id)
  );

  return (
    <>
      {favoriteMeals.length === 0 && renderNoFavoritesNote()}
      {favoriteMeals.length > 0 && renderFavoriteMeals()}
    </>
  );

  function renderNoFavoritesNote() {
    return (
      <View style={styles.noFavoritesNote}>
        <Text>No Favorites Found</Text>
      </View>
    );
  }

  function renderFavoriteMeals() {
    return (
      <FlatList
        style={styles.mealsOverviewList}
        data={favoriteMeals}
        renderItem={renderMealCard}
        keyExtractor={(meal) => `favMealCard${meal.id}`}
      />
    );
  }

  function renderMealCard({ item: meal }) {
    return (
      <MealCard
        meal={meal}
        onPress={() =>
          navigation.navigate("mealsRecipe", {
            meal,
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
  noFavoritesNote: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.8,
  },
});

export default FavoritesScreen;
