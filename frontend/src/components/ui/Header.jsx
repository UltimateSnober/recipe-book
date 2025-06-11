import React from 'react';
import { Plus, Search } from 'lucide-react';

export default function Header({ onAddRecipe, searchTerm, setSearchTerm }) {
    return (
        <header className="bg-white shadow-lg border-b-4 border-orange-500">
            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        📚 كتاب الوصفات
                    </h1>
                    <button
                        onClick={onAddRecipe}
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
    );
}