function showRecipe(recipeId) {
    // Hide all recipes
    const recipes = document.querySelectorAll('.recipe');
    recipes.forEach(recipe => recipe.classList.remove('active'));

    // Show the selected recipe
    const selectedRecipe = document.getElementById(recipeId);
    if (selectedRecipe) {
        selectedRecipe.classList.add('active');
    }
}
