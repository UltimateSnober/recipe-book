import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import DashboardHeader from '../components/DashboardHeader';
import SectionHeader from '../components/SectionHeader';
import RecipeGrid from '../components/RecipeGrid';
import StatisticsSection from '../components/StatisticsSection';
import MobileNav from '../components/MobileNav';

// Sample recipes
const sampleRecipes = [
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
        id: 2,
        name: 'شوربة فريك',
        time: '30 دقيقة',
        difficulty: 'سهل',
        image: 'bg-gradient-to-br from-green-300 to-teal-400',
        views: '840',
        favorite: false,
        category: 'مقبلات'
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
        id: 4,
        name: 'شخشوخة',
        time: '40 دقيقة',
        difficulty: 'متوسط',
        image: 'bg-gradient-to-br from-red-300 to-pink-400',
        views: '920',
        favorite: false,
        category: 'أطباق رئيسية'
    },
    {
        id: 5,
        name: 'طاجين زيتون',
        time: '60 دقيقة',
        difficulty: 'متوسط',
        image: 'bg-gradient-to-br from-purple-300 to-indigo-400',
        views: '750',
        favorite: false,
        category: 'أطباق رئيسية'
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

export default function DashboardPage({ onNavigate }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('recipes');
    const [activeFilters, setActiveFilters] = useState([]);
    const [showMobileSideBar, setShowMobileSideBar] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleProfileClick = () => {
        setActiveTab('profile');
        onNavigate && onNavigate('profile');
    };

    const handleAddRecipeClick = () => {
        setActiveTab('create');
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
        // Navigate to recipe details page with the recipe id
        onNavigate && onNavigate('recipe-details', { recipeId: recipe.id });
    };

    const handleEditRecipe = (recipe) => {
        // Navigate to edit recipe page with the recipe id
        onNavigate && onNavigate('edit-recipe', { recipeId: recipe.id });
    };

    const handleDeleteRecipe = (recipe) => {
        // Show confirmation dialog and delete recipe
        if (window.confirm(`هل أنت متأكد من أنك تريد حذف وصفة "${recipe.name}"؟`)) {
            console.log(`Deleting recipe: ${recipe.name}`);
            // Perform deletion logic
        }
    };

    const handleDuplicateRecipe = (recipe) => {
        console.log(`Duplicating recipe: ${recipe.name}`);
        // Perform duplication logic
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
                    <RecipeGrid
                        recipes={sampleRecipes}
                        searchQuery={searchQuery}
                        activeFilters={activeFilters}
                        selectedCategory={selectedCategory}
                        onViewDetails={handleViewDetails}
                        onEditRecipe={handleEditRecipe}
                        onDeleteRecipe={handleDeleteRecipe}
                        onDuplicate={handleDuplicateRecipe}
                    />
                    <StatisticsSection />
                </section>

                {/* Mobile Bottom Navigation */}
                <MobileNav activeTab={activeTab} onNavigate={onNavigate} />
            </main>
        </div>
    );
}