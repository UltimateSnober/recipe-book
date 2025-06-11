import React from 'react';
import { X, Clock, Users, Star } from 'lucide-react';
import Modal from '../ui/Modal';

export default function RecipeModal({ recipe, isOpen, onClose }) {
    if (!isOpen || !recipe) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="relative">
                {recipe.image ? (
                    <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="w-full h-64 object-cover rounded-t-xl"
                    />
                ) : (
                    <div className="w-full h-24 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 rounded-t-xl" />
                )}
                <button
                    onClick={onClose}
                    className="absolute top-4 left-4 bg-white rounded-full p-2 hover:bg-gray-100"
                >
                    <X className="w-6 h-6" />
                </button>
            </div>

            <div className="p-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{recipe.name}</h2>

                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div className="bg-gray-50 p-3 rounded-lg">
                        <Clock className="w-6 h-6 mx-auto mb-1 text-orange-500" />
                        <p className="text-sm text-gray-600">وقت الطبخ</p>
                        <p className="font-bold">{recipe.cookTime} دقيقة</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                        <Users className="w-6 h-6 mx-auto mb-1 text-blue-500" />
                        <p className="text-sm text-gray-600">عدد الأشخاص</p>
                        <p className="font-bold">{recipe.servings} أشخاص</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                        <Star className="w-6 h-6 mx-auto mb-1 text-yellow-500" />
                        <p className="text-sm text-gray-600">التقييم</p>
                        <p className="font-bold">{recipe.rating}/5</p>
                    </div>
                </div>

                <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-800">المكونات</h3>
                    <ul className="space-y-2">
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                {ingredient}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">طريقة التحضير</h3>
                    <ol className="space-y-3">
                        {recipe.instructions.map((instruction, index) => (
                            <li key={index} className="flex gap-3">
                                <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                                    {index + 1}
                                </span>
                                <span className="text-gray-700">{instruction}</span>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </Modal>
    );
}