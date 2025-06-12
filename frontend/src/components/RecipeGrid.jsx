import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';

export default function RecipeGrid({
    recipes,
    searchQuery,
    activeFilters = [],
    selectedCategory = null,
    isLoading = false,
    onViewDetails,
    onEditRecipe,
    onDeleteRecipe,
    onDuplicate
}) {
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [isFiltering, setIsFiltering] = useState(false);

    // Handle filtering with animation effect
    useEffect(() => {
        setIsFiltering(true);

        // Short delay to allow animation
        const timer = setTimeout(() => {
            const filtered = recipes.filter(recipe => {
                // Handle selected category from category pills
                if (selectedCategory && recipe.category !== selectedCategory) {
                    return false;
                }

                // Search filter - improve to handle Arabic text properly
                const searchLower = searchQuery.toLowerCase().trim();
                const matchesSearch = searchLower === '' ||
                    recipe.name.toLowerCase().includes(searchLower) ||
                    recipe.description?.toLowerCase().includes(searchLower) ||
                    recipe.category.toLowerCase().includes(searchLower);

                // Skip other filtering if search doesn't match
                if (!matchesSearch) {
                    return false;
                }

                // If no active filters, return immediately after search match
                if (activeFilters.length === 0) {
                    return true;
                }

                // Check for category filters
                const categoryFilters = ['أطباق رئيسية', 'مقبلات', 'حلويات', 'مشروبات'];
                const hasCategoryFilter = activeFilters.some(filter => categoryFilters.includes(filter));

                if (hasCategoryFilter && !activeFilters.includes(recipe.category)) {
                    return false;
                }

                // Check for difficulty level filters
                const difficultyFilters = ['سهل', 'متوسط', 'صعب'];
                const hasDifficultyFilter = activeFilters.some(filter => difficultyFilters.includes(filter));

                if (hasDifficultyFilter && !activeFilters.includes(recipe.difficulty)) {
                    return false;
                }

                // Check for time filters with more robust parsing
                try {
                    // Extract numeric value from time string (e.g. "45 دقيقة" -> 45)
                    const timeMatch = recipe.time.match(/(\d+)/);
                    const timeValue = timeMatch ? parseInt(timeMatch[0]) : 0;

                    if (activeFilters.includes('أقل من 30 دقيقة') && timeValue >= 30) {
                        return false;
                    }

                    if (activeFilters.includes('30-60 دقيقة') && (timeValue < 30 || timeValue > 60)) {
                        return false;
                    }

                    if (activeFilters.includes('أكثر من ساعة') && timeValue <= 60) {
                        return false;
                    }
                } catch {
                    console.warn('Error parsing recipe time:', recipe.time);
                }

                // If we passed all filters, include the recipe
                return true;
            });

            setFilteredRecipes(filtered);
            setIsFiltering(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [recipes, searchQuery, activeFilters, selectedCategory]);

    // Loading state
    if (isLoading) {
        return <LoadingGrid />;
    }

    // No results state
    if (filteredRecipes.length === 0) {
        return (
            <div className="text-center py-8 md:py-12 bg-white/50 rounded-lg shadow-sm">
                <div className="mb-4">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 className="text-gray-900 font-medium text-lg">لم يتم العثور على وصفات</h3>
                <p className="text-gray-500 mt-1 mb-4">لم نتمكن من العثور على وصفات تطابق معايير البحث الخاصة بك</p>

                {(searchQuery || activeFilters.length > 0 || selectedCategory) && (
                    <button
                        onClick={() => window.location.reload()}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                        إعادة تعيين الفلاتر
                    </button>
                )}
            </div>
        );
    }

    return (
        <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 transition-opacity duration-300 ${isFiltering ? 'opacity-50' : 'opacity-100'}`}
        >
            {filteredRecipes.map((recipe, index) => (
                <RecipeCard
                    key={recipe.id || index}
                    recipe={recipe}
                    onViewDetails={onViewDetails}
                    onEditRecipe={onEditRecipe}
                    onDeleteRecipe={onDeleteRecipe}
                    onDuplicate={onDuplicate}
                />
            ))}
        </div>
    );
}

// Loading skeleton component
function LoadingGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                    <div className="h-40 bg-gray-200"></div>
                    <div className="p-4">
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                        <div className="flex justify-between mb-4">
                            <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                            <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                            <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}