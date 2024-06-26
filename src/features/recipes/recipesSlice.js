import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { fetchRecipes } from '../../utils/api';

export const fetchAllRecipes = createAsyncThunk('recipes/fetchAll', async () => {
  const response = await fetchRecipes();
  return response.meals;
});

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    recipes: [],
    favoriteRecipes: [],
    selectedRecipe: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    selectRecipe: (state, action) => {
      state.selectedRecipe = action.payload;
    },
    toggleFavorite: (state, action) => {
      const recipe = action.payload;
      const existingIndex = state.favoriteRecipes.findIndex(r => r.idMeal === recipe.idMeal);
      if (existingIndex !== -1) {
        state.favoriteRecipes = state.favoriteRecipes.filter(r => r.idMeal !== recipe.idMeal);
        toast.success("Removed from favorites");
      } else {
        state.favoriteRecipes = state.favoriteRecipes.concat(recipe);
        toast.success("Added to favorites");
      }
    },
    reorderRecipes: (state, action) => {
      state.recipes = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllRecipes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllRecipes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.recipes = action.payload;
      })
      .addCase(fetchAllRecipes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { selectRecipe, toggleFavorite, reorderRecipes } = recipesSlice.actions;
export default recipesSlice.reducer;
