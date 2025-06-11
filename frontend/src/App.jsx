import React, { useState } from 'react';
import useRecipes from './hooks/useRecipes';
import categories from './utils/categories';

import Header from './components/ui/Header';
import CategoryFilter from './components/ui/CategoryFilter';
import RecipeCard from './components/recipe/RecipeCard';
import RecipeModal from './components/recipe/RecipeModal';
import AddRecipeModal from './components/recipe/AddRecipeModal';

export default function RecipeBookApp() {
  const {
    filteredRecipes,
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
    toggleFavorite,
    addRecipe
  } = useRecipes();

  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const viewRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setIsRecipeModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50" dir="rtl">
      {/* Header */}
      <Header
        onAddRecipe={() => setIsAddModalOpen(true)}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredRecipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onToggleFavorite={toggleFavorite}
              onViewRecipe={viewRecipe}
            />
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">لا توجد وصفات</h3>
            <p className="text-gray-500">جرب البحث بكلمات مختلفة أو اختر فئة أخرى</p>
          </div>
        )}
      </div>

      {/* Modals */}
      <RecipeModal
        recipe={selectedRecipe}
        isOpen={isRecipeModalOpen}
        onClose={() => {
          setIsRecipeModalOpen(false);
          setSelectedRecipe(null);
        }}
      />

      <AddRecipeModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddRecipe={addRecipe}
      />
    </div>
  );
}