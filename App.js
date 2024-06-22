import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Button, Platform, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider } from "react-redux";
import Categories from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsRecipeScreen from "./screens/MealsRecipeScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import FavoritesContextProvider from "./store/context/favorites-context";
import { store } from "./store/redux/store";

export default function App() {
    const Stack = createNativeStackNavigator();
    const Drawer = createDrawerNavigator();

    function DrawerScreen() {
        return (
            <Drawer.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#1B195A",
                    },
                    headerTintColor: "white",
                    headerTitleAlign: "center",
                    sceneContainerStyle: {
                        backgroundColor: "#E2DFE9",
                    },
                    drawerContentContainerStyle: {
                        paddingTop: 50,
                        // backgroundColor: "#2C1363"
                    },
                    drawerStyle: {
                        backgroundColor: "#2C1363",
                    },
                    drawerActiveTintColor: "#1B195A",
                    drawerActiveBackgroundColor: "#4CBBBD",
                    drawerInactiveTintColor: "white",
                }}
            >
                <Drawer.Screen
                    name="mealsCategories"
                    options={{
                        title: "All Categories",
                        drawerIcon: ({ color, size, focused }) => (
                            <Ionicons name="list" color={color} size={size} />
                        ),
                    }}
                    component={Categories}
                />
                <Drawer.Screen
                    name="favorites"
                    options={{
                        title: "Favorites",
                        drawerIcon: ({ color, size, focused }) => (
                            <Ionicons name="heart" color={color} size={size} />
                        ),
                    }}
                    component={FavoritesScreen}
                />
            </Drawer.Navigator>
        );
    }

    return (
        <>
            <StatusBar style="light" />
            {/* <FavoritesContextProvider> */}
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName="mealsCategories"
                        screenOptions={{
                            headerStyle: {
                                backgroundColor: "#1B195A",
                            },
                            headerTintColor: "white",
                            headerTitleAlign: "center",
                            headerTitleStyle: {
                                fontSize: 18,
                            },
                            contentStyle: {
                                backgroundColor: "#E2DFE9",
                            },
                        }}
                    >
                        <Stack.Screen
                            name="drawer"
                            options={{
                                title: "All Categories",
                                headerShown: false,
                            }}
                            component={DrawerScreen}
                        />
                        <Stack.Screen
                            name="mealsOverview"
                            // options={({ route, navigation }) => {
                            //     return {
                            //         title: route.params.category.title,
                            //     };
                            // }}
                            component={MealsOverviewScreen}
                        />
                        <Stack.Screen
                            name="mealsRecipe"
                            component={MealsRecipeScreen}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
            {/* </FavoritesContextProvider> */}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
