import React from 'react';
import { Filter } from 'lucide-react';

export default function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
    return (
        <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
                <Filter className="w-5 h-5 text-gray-600" />
                <h2 className="text-lg font-semibold text-gray-800">تصفية حسب الفئة:</h2>
            </div>
            <div className="flex flex-wrap gap-3">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-6 py-3 rounded-full transition-all font-medium ${selectedCategory === category
                            ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105'
                            : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-orange-300'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
}