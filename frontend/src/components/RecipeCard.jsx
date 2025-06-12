import React, { useState, useRef, useEffect } from 'react';
import { Clock, Star, Heart, Eye, MoreVertical, Edit, Trash, Copy } from 'lucide-react';
import RecipeDetailModal from './RecipeDetailModal';

export default function RecipeCard({ recipe, onEditRecipe, onDeleteRecipe, onDuplicate }) {
    const [showMenu, setShowMenu] = useState(false);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const menuRef = useRef(null);

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow relative">
                {/* Options Menu */}
                <div className="absolute top-2 left-2 z-10" ref={menuRef}>
                    <button
                        onClick={(e) => { e.stopPropagation(); setShowMenu(!showMenu); }}
                        className="bg-white/80 p-1.5 rounded-full hover:bg-white text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        <MoreVertical className="h-4 w-4" />
                    </button>

                    {showMenu && (
                        <div className="absolute left-0 mt-1 w-44 bg-white rounded-md shadow-lg z-20 py-1 text-sm">
                            <button
                                onClick={() => { onEditRecipe && onEditRecipe(recipe); setShowMenu(false); }}
                                className="flex w-full items-center px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                <Edit className="h-4 w-4 ml-2" />
                                تعديل الوصفة
                            </button>
                            <button
                                onClick={() => { onDuplicate && onDuplicate(recipe); setShowMenu(false); }}
                                className="flex w-full items-center px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                <Copy className="h-4 w-4 ml-2" />
                                نسخ الوصفة
                            </button>
                            <button
                                onClick={() => { onDeleteRecipe && onDeleteRecipe(recipe); setShowMenu(false); }}
                                className="flex w-full items-center px-3 py-1.5 text-sm text-red-600 hover:bg-red-50"
                            >
                                <Trash className="h-4 w-4 ml-2" />
                                حذف الوصفة
                            </button>
                        </div>
                    )}
                </div>

                {/* Recipe Image with Category */}
                <div
                    className={`h-32 md:h-40 ${recipe.image} relative cursor-pointer`}
                    onClick={() => setShowDetailModal(true)}
                >
                    <span className="absolute top-2 right-2 bg-white/90 text-gray-800 text-xs px-2 py-0.5 rounded-full">
                        {recipe.category}
                    </span>
                </div>

                {/* Recipe Content */}
                <div className="p-4" onClick={() => setShowDetailModal(true)}>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1.5">{recipe.name}</h3>
                    <div className="flex items-center justify-between text-xs md:text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                            <Clock className="h-3 w-3 md:h-4 md:w-4 ml-1" />
                            {recipe.time}
                        </div>
                        <div className="flex items-center">
                            <Star className="h-3 w-3 md:h-4 md:w-4 ml-1" />
                            {recipe.difficulty}
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowDetailModal(true);
                            }}
                            className="text-xs md:text-sm text-red-600 hover:text-red-700 font-medium"
                        >
                            تفاصيل الوصفة
                        </button>
                        <div className="flex items-center space-x-reverse space-x-2">
                            <button
                                className="text-gray-400 hover:text-red-500"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    console.log('Toggle favorite');
                                }}
                            >
                                <Heart className={`h-4 w-4 ${recipe.favorite ? 'text-red-500 fill-red-500' : ''}`} />
                            </button>
                            <div className="flex items-center text-gray-500 text-xs">
                                <Eye className="h-3 w-3 md:h-4 md:w-4 ml-1" />
                                <span>{recipe.views}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recipe Detail Modal */}
            <RecipeDetailModal
                recipe={recipe}
                isOpen={showDetailModal}
                onClose={() => setShowDetailModal(false)}
                onEdit={onEditRecipe}
            />
        </>
    );
}