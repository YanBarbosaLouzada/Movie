import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: "favorites",
    initialState: [],
    reducers: {
        addFavorite: (state, action) => {
            const movie = action.payload;
            const exists = state.find((fav) => fav.imdbID === movie.imdbID);
            if (!exists) {
                state.push(movie);
                console.log("Adicionado aos favoritos:", movie);
            }
        },
        removeFavorite: (state, action) => {
            const movieId = action.payload;
            return state.filter((fav) => fav.imdbID !== movieId);
        },
    }
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
