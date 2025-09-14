import { Link } from 'react-router-dom';
import { useRecipeStore } from 'recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.searchTerm ? state.filteredRecipes : state.recipes
  );

  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes found. Try adjusting your search.</p>
      ) : (
        recipes.map((recipe) => {
          const isFavorite = favorites.includes(recipe.id);

          return (
            <div key={recipe.id} style={{ marginBottom: '1rem' }}>
              <h3>
                <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
              </h3>
              <p>{recipe.description}</p>
              {isFavorite ? (
                <button onClick={() => removeFavorite(recipe.id)}>
                  💔 Remove Favorite
                </button>
              ) : (
                <button onClick={() => addFavorite(recipe.id)}>❤️ Add Favorite</button>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default RecipeList;
