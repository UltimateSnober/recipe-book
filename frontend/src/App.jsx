import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import useRecipes from './hooks/useRecipes';
import categories from './utils/categories';

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
      <header className="bg-white shadow-lg border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              📚 كتاب الوصفات
            </h1>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-colors flex items-center gap-2 font-medium shadow-lg"
            >
              <Plus className="w-5 h-5" />
              إضافة وصفة
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="ابحث عن الوصفات أو المكونات..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pr-12 pl-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all text-lg"
            />
          </div>
        </div>
      </header>

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