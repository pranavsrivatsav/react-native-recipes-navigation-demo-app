import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const id = action.payload.id;
      if (state.ids.includes(id)) return;

      state.ids = [...state.ids, id];
    },
    removeFavorite: (state, action) => {
      const id = action.payload.id;
      state.ids = state.ids.filter((favId) => favId !== id);
    },
  },
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export const favoritesReducer = favoritesSlice.reducer;
