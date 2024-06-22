import React, { useEffect, useContext } from "react";
import {
    Button,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import RecipeBasicDetail from "../components/RecipeBasicDetail";
import RecipeIngredients from "../components/RecipeIngredients";
import RecipeInstructions from "../components/RecipeInstructions";
import RecipeAdditionalDetail from "../components/RecipeAdditionalDetail";
import RecipeImageAndTitle from "../components/RecipeImageAndTitle";
import { truncateStringAndAddEllipsis } from "../utils";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

const MealsRecipeScreen = ({ route, navigation }) => {
    const { meal } = route.params;
    const favoriteMealIds = useSelector((state) => state.favorites.ids);

    const dispatch = useDispatch();

    // const favoritesCtx = useContext(FavoritesContext);

    // const isFavoriteMeal = favoritesCtx.ids.includes(meal.id);
    const isFavoriteMeal = favoriteMealIds.includes(meal.id);

    useEffect(() => {
        let screenTitle = `${meal.title}`;
        screenTitle = truncateStringAndAddEllipsis(screenTitle, 25);

        navigation.setOptions({
            title: screenTitle,
            headerRight: ({tintColor}) => {
                return (
                    <IconButton iconName={'heart'} color={isFavoriteMeal ? 'red' : tintColor} size={18} onPress={toggleFavorite}/>
                )
            },
            headerTitleAlign: 'left'
        });
    }, [meal, navigation, isFavoriteMeal]);

    return (
        <ScrollView style={styles.container}>
            <RecipeImageAndTitle meal={meal} />
            <View style={styles.contentContainer}>
                <RecipeBasicDetail meal={meal} />
                <RecipeIngredients meal={meal} />
                <RecipeInstructions meal={meal} />
                <RecipeAdditionalDetail meal={meal} />
            </View>
        </ScrollView>
    );

    function toggleFavorite() {
        if(isFavoriteMeal) {
            // favoritesCtx.removeFavorites(meal.id);
            dispatch(removeFavorite({id: meal.id}))
        } else {
            // favoritesCtx.addFavorites(meal.id);
            dispatch(addFavorite({id: meal.id}))
        }
    }
};

const styles = StyleSheet.create({
    container: {
        margin: 12,
    },
    contentContainer: {
        marginHorizontal: 5,
    },
});

export default MealsRecipeScreen;
