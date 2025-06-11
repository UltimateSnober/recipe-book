import React from 'react';
import { Heart, Star, Clock, Users } from 'lucide-react';

export default function RecipeCard({ recipe, onToggleFavorite, onViewRecipe }) {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="relative">
                <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-48 object-cover"
                />
                <button
                    onClick={() => onToggleFavorite(recipe.id)}
                    className={`absolute top-3 right-3 p-2 rounded-full ${recipe.isFavorite ? 'bg-red-500 text-white' : 'bg-white text-gray-600'
                        } hover:scale-110 transition-transform`}
                >
                    <Heart className={`w-5 h-5 ${recipe.isFavorite ? 'fill-current' : ''}`} />
                </button>
                <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded-lg text-sm">
                    <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {recipe.rating}
                    </div>
                </div>
            </div>

            <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{recipe.name}</h3>
                <p className="text-gray-600 mb-3">{recipe.category}</p>

                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {recipe.cookTime} دقيقة
                    </div>
                    <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {recipe.servings} أشخاص
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${recipe.difficulty === 'سهل' ? 'bg-green-100 text-green-800' :
                        recipe.difficulty === 'متوسط' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                        }`}>
                        {recipe.difficulty}
                    </span>
                </div>

                <button
                    onClick={() => onViewRecipe(recipe)}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 rounded-lg hover:from-orange-600 hover:to-red-600 transition-colors font-medium"
                >
                    عرض الوصفة
                </button>
            </div>
        </div>
    );
}