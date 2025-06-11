import React, { useState } from 'react';
import { X } from 'lucide-react';
import Modal from '../ui/Modal';
import categories from '../../utils/categories';

export default function AddRecipeModal({ isOpen, onClose, onAddRecipe }) {
    const [formData, setFormData] = useState({
        name: '',
        category: 'أطباق رئيسية',
        cookTime: '',
        servings: '',
        difficulty: 'سهل',
        ingredients: [''],
        instructions: ['']
    });

    const handleSubmit = () => {
        if (!formData.name || !formData.cookTime || !formData.servings) {
            alert('يرجى ملء جميع الحقول المطلوبة');
            return;
        }

        const newRecipe = {
            id: Date.now(),
            ...formData,
            cookTime: parseInt(formData.cookTime),
            servings: parseInt(formData.servings),
            rating: 0,
            image: 'https://images.unsplash.com/photo-1546548970-71785318a17b?w=400&h=300&fit=crop',
            isFavorite: false
        };
        onAddRecipe(newRecipe);
        setFormData({
            name: '',
            category: 'أطباق رئيسية',
            cookTime: '',
            servings: '',
            difficulty: 'سهل',
            ingredients: [''],
            instructions: ['']
        });
        onClose();
    };

    const addIngredient = () => {
        setFormData(prev => ({
            ...prev,
            ingredients: [...prev.ingredients, '']
        }));
    };

    const addInstruction = () => {
        setFormData(prev => ({
            ...prev,
            instructions: [...prev.instructions, '']
        }));
    };

    const updateIngredient = (index, value) => {
        const newIngredients = [...formData.ingredients];
        newIngredients[index] = value;
        setFormData(prev => ({ ...prev, ingredients: newIngredients }));
    };

    const updateInstruction = (index, value) => {
        const newInstructions = [...formData.instructions];
        newInstructions[index] = value;
        setFormData(prev => ({ ...prev, instructions: newInstructions }));
    };

    if (!isOpen) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">إضافة وصفة جديدة</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">اسم الوصفة</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">الفئة</label>
                            <select
                                value={formData.category}
                                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            >
                                {categories.filter(cat => cat !== 'الكل').map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">المستوى</label>
                            <select
                                value={formData.difficulty}
                                onChange={(e) => setFormData(prev => ({ ...prev, difficulty: e.target.value }))}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            >
                                <option value="سهل">سهل</option>
                                <option value="متوسط">متوسط</option>
                                <option value="صعب">صعب</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">وقت الطبخ (دقيقة)</label>
                            <input
                                type="number"
                                value={formData.cookTime}
                                onChange={(e) => setFormData(prev => ({ ...prev, cookTime: e.target.value }))}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">عدد الأشخاص</label>
                            <input
                                type="number"
                                value={formData.servings}
                                onChange={(e) => setFormData(prev => ({ ...prev, servings: e.target.value }))}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-sm font-medium text-gray-700">المكونات</label>
                            <button
                                type="button"
                                onClick={addIngredient}
                                className="text-orange-500 hover:text-orange-600 text-sm font-medium"
                            >
                                + إضافة مكون
                            </button>
                        </div>
                        {formData.ingredients.map((ingredient, index) => (
                            <input
                                key={index}
                                type="text"
                                value={ingredient}
                                onChange={(e) => updateIngredient(index, e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent mb-2"
                                placeholder={`مكون ${index + 1}`}
                                required
                            />
                        ))}
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-sm font-medium text-gray-700">طريقة التحضير</label>
                            <button
                                type="button"
                                onClick={addInstruction}
                                className="text-orange-500 hover:text-orange-600 text-sm font-medium"
                            >
                                + إضافة خطوة
                            </button>
                        </div>
                        {formData.instructions.map((instruction, index) => (
                            <textarea
                                key={index}
                                value={instruction}
                                onChange={(e) => updateInstruction(index, e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent mb-2"
                                placeholder={`الخطوة ${index + 1}`}
                                rows="2"
                                required
                            />
                        ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-colors font-medium"
                        >
                            حفظ الوصفة
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400 transition-colors font-medium"
                        >
                            إلغاء
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}