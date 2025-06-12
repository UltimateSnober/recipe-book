import React, { useState } from 'react';
import { Plus, ChevronDown } from 'lucide-react';

export default function SectionHeader({ title, onAddRecipe, onCategoryChange }) {
    const [showCategoryFilter, setShowCategoryFilter] = useState(false);
    const [activeCategory, setActiveCategory] = useState('الكل');

    const categories = [
        { id: 'all', name: 'الكل' },
        { id: 'main', name: 'أطباق رئيسية' },
        { id: 'appetizers', name: 'مقبلات' },
        { id: 'desserts', name: 'حلويات' },
        { id: 'drinks', name: 'مشروبات' }
    ];

    // Handle category selection
    const handleCategorySelect = (category) => {
        setActiveCategory(category.name);
        if (onCategoryChange) {
            onCategoryChange(category.id === 'all' ? null : category.name);
        }
    };

    return (
        <div className="mb-6 md:mb-8">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h2>

                <div className="flex items-center gap-2">
                    {/* Mobile: Collapsible Categories Button */}
                    <button
                        onClick={() => setShowCategoryFilter(!showCategoryFilter)}
                        className="md:hidden bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-lg flex items-center gap-1 hover:bg-gray-50 transition"
                    >
                        <span>تصنيف</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${showCategoryFilter ? 'transform rotate-180' : ''}`} />
                    </button>

                    {/* Add Recipe Button */}
                    <button
                        onClick={onAddRecipe}
                        className="bg-red-600 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg flex items-center gap-1 md:gap-2 hover:bg-red-700 transition text-sm md:text-base"
                    >
                        <Plus className="h-4 w-4 md:h-5 md:w-5" />
                        <span className="hidden sm:inline">إضافة</span>
                    </button>
                </div>
            </div>

            {/* Mobile: Collapsible Categories */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${showCategoryFilter ? 'max-h-20' : 'max-h-0'}`}>
                <div className="flex overflow-x-auto pb-2 gap-2 whitespace-nowrap scrollbar-hide">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            onClick={() => handleCategorySelect(category)}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${activeCategory === category.name
                                    ? 'bg-red-600 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Desktop: Always Visible Categories */}
            <div className="hidden md:flex flex-wrap gap-2 mt-4">
                {categories.map(category => (
                    <button
                        key={category.id}
                        onClick={() => handleCategorySelect(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category.name
                                ? 'bg-red-600 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
        </div>
    );
}