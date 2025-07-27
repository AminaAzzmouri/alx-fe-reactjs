import React from 'react';
import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  // Get favorites and map them to actual recipe objects
  const favorites = useRecipeStore((state) =>
    state.favorites
      .map((id) => state.recipes.find((recipe) => recipe.id === id))
      .filter(Boolean) // remove undefined if recipe not found
  );

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length === 0 && <p>No favorite recipes yet.</p>}
      {favorites.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;