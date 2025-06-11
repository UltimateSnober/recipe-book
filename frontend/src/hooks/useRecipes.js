import { useState, useEffect } from 'react';
import sampleRecipes from '../utils/sampleRecipes';

export default function useRecipes() {
  const [recipes, setRecipes] = useState(sampleRecipes);
  const [filteredRecipes, setFilteredRecipes] = useState(sampleRecipes);
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    let filtered = recipes;

    if (selectedCategory !== 'الكل') {
      filtered = filtered.filter(recipe => recipe.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(recipe =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.ingredients.some(ingredient =>
          ingredient.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    setFilteredRecipes(filtered);
  }, [recipes, selectedCategory, searchTerm]);

  const toggleFavorite = (recipeId) => {
    setRecipes(prev => prev.map(recipe =>
      recipe.id === recipeId
        ? { ...recipe, isFavorite: !recipe.isFavorite }
        : recipe
    ));
  };

  const addRecipe = (newRecipe) => {
    setRecipes(prev => [...prev, newRecipe]);
  };

  return {
    recipes,
    filteredRecipes,
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
    toggleFavorite,
    addRecipe
  };
}