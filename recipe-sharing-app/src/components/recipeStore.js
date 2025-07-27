import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  addRecipe: (recipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, recipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: get().filterWithSearch(updatedRecipes, state.searchTerm),
      };
    }),

  setSearchTerm: (term) => {
    const { recipes, filterWithSearch } = get();
    set({
      searchTerm: term,
      filteredRecipes: filterWithSearch(recipes, term),
    });
  },

  filterWithSearch: (recipes, term) => {
    return recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
  },

  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updatedRecipes,
        filteredRecipes: get().filterWithSearch(updatedRecipes, state.searchTerm),
      };
    }),

  updateRecipe: (updated) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((r) =>
        r.id === updated.id ? updated : r
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: get().filterWithSearch(updatedRecipes, state.searchTerm),
      };
    }),
}));
