import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import DashboardHeader from '../components/DashboardHeader';
import SectionHeader from '../components/SectionHeader';
import RecipeGrid from '../components/RecipeGrid';
import MobileNav from '../components/MobileNav';
import { Heart } from 'lucide-react';

// Filter only the favorite recipes from sample data
const favoriteSampleRecipes = [
    {
        id: 1,
        name: 'كسكس بالخضار',
        time: '45 دقيقة',
        difficulty: 'متوسط',
        image: 'bg-gradient-to-br from-yellow-300 to-orange-400',
        views: '1.2k',
        favorite: true,
        category: 'أطباق رئيسية'
    },
    {
        id: 3,
        name: 'بقلاوة',
        time: '90 دقيقة',
        difficulty: 'صعب',
        image: 'bg-gradient-to-br from-amber-300 to-yellow-400',
        views: '2.5k',
        favorite: true,
        category: 'حلويات'
    },
    {
        id: 6,
        name: 'مقروط',
        time: '120 دقيقة',
        difficulty: 'صعب',
        image: 'bg-gradient-to-br from-orange-300 to-red-400',
        views: '1.8k',
        favorite: true,
        category: 'حلويات'
    }
];

export default function FavoritesPage({ onNavigate }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('favorites');
    const [activeFilters, setActiveFilters] = useState([]);
    const [showMobileSideBar, setShowMobileSideBar] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [recipes, setRecipes] = useState(favoriteSampleRecipes);

    const handleProfileClick = () => {
        onNavigate && onNavigate('profile');
    };

    const handleAddRecipeClick = () => {
        onNavigate && onNavigate('create');
    };

    const handleFilterChange = (filters) => {
        setActiveFilters(filters);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const toggleMobileSideBar = () => {
        setShowMobileSideBar(!showMobileSideBar);
    };

    const handleViewDetails = (recipe) => {
        onNavigate && onNavigate('recipe-details', { recipeId: recipe.id });
    };

    const handleEditRecipe = (recipe) => {
        onNavigate && onNavigate('edit-recipe', { recipeId: recipe.id });
    };

    const handleRemoveFromFavorites = (recipe) => {
        if (window.confirm(`هل أنت متأكد من أنك تريد إزالة "${recipe.name}" من المفضلة؟`)) {
            console.log(`Removing from favorites: ${recipe.name}`);
            // In a real app, this would call an API - here we just update local state
            setRecipes(recipes.filter(r => r.id !== recipe.id));
        }
    };

    const handleToggleFavorite = (recipe, isFavorite) => {
        // If removing from favorites, update the favorites list
        if (!isFavorite) {
            handleRemoveFromFavorites(recipe);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 flex flex-col md:flex-row" dir="rtl">
            {/* Desktop SideBar - hidden on mobile */}
            <div className="hidden md:block">
                <SideBar onNavigate={onNavigate} activeTab={activeTab} />
            </div>

            {/* Mobile SideBar - shown when toggled */}
            <div className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${showMobileSideBar ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="absolute inset-0 bg-black/50" onClick={toggleMobileSideBar}></div>
                <div className={`absolute top-0 right-0 bottom-0 w-64 bg-white transform transition-transform duration-300 ease-in-out ${showMobileSideBar ? 'translate-x-0' : 'translate-x-full'}`}>
                    <SideBar onNavigate={onNavigate} activeTab={activeTab} isMobile={true} onClose={toggleMobileSideBar} />
                </div>
            </div>

            <main className="flex-1 flex flex-col">
                <DashboardHeader
                    onProfile={handleProfileClick}
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    onFilterChange={handleFilterChange}
                    onMenuClick={toggleMobileSideBar}
                />
                <section className="flex-1 p-4 md:p-8">
                    <SectionHeader
                        title="وصفاتي المفضلة"
                        onAddRecipe={handleAddRecipeClick}
                        onCategoryChange={handleCategoryChange}
                    />

                    {recipes.length === 0 ? (
                        <div className="text-center py-16 bg-white/50 rounded-lg shadow-sm">
                            <div className="bg-red-50 inline-block p-6 rounded-full mb-4">
                                <Heart className="h-12 w-12 text-red-400" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-2">لا توجد وصفات مفضلة</h3>
                            <p className="text-gray-600 mb-6">لم تقم بإضافة أي وصفة إلى المفضلة بعد</p>
                            <button
                                onClick={() => onNavigate('dashboard')}
                                className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
                            >
                                استعرض جميع الوصفات
                            </button>
                        </div>
                    ) : (
                        <>
                            <RecipeGrid
                                recipes={recipes}
                                searchQuery={searchQuery}
                                activeFilters={activeFilters}
                                selectedCategory={selectedCategory}
                                onViewDetails={handleViewDetails}
                                onEditRecipe={handleEditRecipe}
                                onDeleteRecipe={handleRemoveFromFavorites}
                                onToggleFavorite={handleToggleFavorite}
                            />

                            <div className="mt-8 text-center">
                                <button
                                    onClick={() => onNavigate('dashboard')}
                                    className="text-gray-600 hover:text-red-600 transition font-medium"
                                >
                                    عرض جميع الوصفات
                                </button>
                            </div>
                        </>
                    )}
                </section>

                {/* Mobile Bottom Navigation */}
                <MobileNav activeTab={activeTab} onNavigate={onNavigate} />
            </main>
        </div>
    );
}