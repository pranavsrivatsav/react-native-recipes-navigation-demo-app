import React, { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorites: (id) => {},
    removeFavorites: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
    const [favIds, setFavIds] = useState([]);

    const addFavorites = (id) => {
        console.log("add favs clicked", favIds)
        const isIdAlreadyPresent = favIds.includes(id);
        if (isIdAlreadyPresent) return;

        setFavIds((currentFavIds) => [...currentFavIds, id]);
    }

    const removeFavorites = (id) => {
        console.log("remove favs clicked", favIds)
        setFavIds((currentFavIds) => currentFavIds.filter((favId) => favId !== id));
    }

    const value = {
        ids: favIds,
        addFavorites,
        removeFavorites
    };

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesContextProvider;
