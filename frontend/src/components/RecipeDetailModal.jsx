import React, { useState, useEffect, useRef } from 'react';
import { Clock, Users, Medal, ChefHat, Heart, Printer, Share2, Edit, X, Star } from 'lucide-react';

export default function RecipeDetailModal({ recipe, isOpen, onClose, onEdit, onToggleFavorite }) {
    const [activeTab, setActiveTab] = useState('instructions');
    const modalRef = useRef(null);

    // Close modal when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            // Prevent body scrolling when modal is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, onClose]);

    // ESC key to close modal
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) onClose();
        };

        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
        }

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, onClose]);

    if (!isOpen || !recipe) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 md:p-6" dir="rtl">
            <div
                ref={modalRef}
                className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col animate-fadeIn"
                style={{ maxHeight: 'calc(100vh - 2rem)' }}
            >
                {/* Modal Header with Image */}
                <div className="relative">
                    <div className={`${recipe.image} h-40 md:h-48`}></div>
                    <button
                        onClick={onClose}
                        className="absolute top-3 left-3 bg-white/80 hover:bg-white p-1.5 rounded-full text-gray-800 transition-colors z-10"
                    >
                        <X className="h-5 w-5" />
                    </button>

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 md:p-4">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-end">
                            <div>
                                <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full mb-1 inline-block">
                                    {recipe.category}
                                </span>
                                <h2 className="text-xl md:text-2xl font-bold text-white">
                                    {recipe.name}
                                </h2>
                            </div>
                            <div className="flex gap-2 mt-2 md:mt-0">
                                <button className="bg-white/90 p-1.5 rounded-full text-gray-700 hover:text-red-600">
                                    <Printer className="h-4 w-4" />
                                </button>
                                <button className="bg-white/90 p-1.5 rounded-full text-gray-700 hover:text-red-600">
                                    <Share2 className="h-4 w-4" />
                                </button>
                                <button onClick={() => onEdit(recipe)} className="bg-white/90 p-1.5 rounded-full text-gray-700 hover:text-red-600">
                                    <Edit className="h-4 w-4" />
                                </button>
                                <button
                                    onClick={(e) => onToggleFavorite && onToggleFavorite(e)}
                                    className="bg-white/90 p-1.5 rounded-full text-gray-700 hover:text-red-600"
                                >
                                    <Heart className={`h-4 w-4 ${recipe.favorite ? 'text-red-600 fill-red-600' : ''}`} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recipe Quick Info */}
                <div className="p-4 border-b border-gray-100">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                        <div className="bg-orange-50 p-2 rounded-lg flex items-center">
                            <Clock className="h-5 w-5 text-orange-600 ml-2" />
                            <div>
                                <p className="text-gray-500 text-xs">وقت التحضير</p>
                                <p className="font-medium">{recipe.time}</p>
                            </div>
                        </div>
                        <div className="bg-blue-50 p-2 rounded-lg flex items-center">
                            <Medal className="h-5 w-5 text-blue-600 ml-2" />
                            <div>
                                <p className="text-gray-500 text-xs">المستوى</p>
                                <p className="font-medium">{recipe.difficulty}</p>
                            </div>
                        </div>
                        <div className="bg-green-50 p-2 rounded-lg flex items-center">
                            <Users className="h-5 w-5 text-green-600 ml-2" />
                            <div>
                                <p className="text-gray-500 text-xs">عدد الأشخاص</p>
                                <p className="font-medium">4-6 أشخاص</p>
                            </div>
                        </div>
                        <div className="bg-purple-50 p-2 rounded-lg flex items-center">
                            <Star className="h-5 w-5 text-purple-600 ml-2" />
                            <div>
                                <p className="text-gray-500 text-xs">التقييم</p>
                                <p className="font-medium">4.8 (36)</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tab Navigation - Scrollable on mobile */}
                <div className="border-b border-gray-100">
                    <div className="flex overflow-x-auto whitespace-nowrap px-1 scrollbar-hide">
                        <button
                            onClick={() => setActiveTab('instructions')}
                            className={`px-4 py-2 font-medium text-sm transition-colors ${activeTab === 'instructions'
                                ? 'text-red-600 border-b-2 border-red-600'
                                : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            طريقة التحضير
                        </button>
                        <button
                            onClick={() => setActiveTab('ingredients')}
                            className={`px-4 py-2 font-medium text-sm transition-colors ${activeTab === 'ingredients'
                                ? 'text-red-600 border-b-2 border-red-600'
                                : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            المكونات
                        </button>
                        <button
                            onClick={() => setActiveTab('nutrition')}
                            className={`px-4 py-2 font-medium text-sm transition-colors ${activeTab === 'nutrition'
                                ? 'text-red-600 border-b-2 border-red-600'
                                : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            القيمة الغذائية
                        </button>
                    </div>
                </div>

                {/* Content Area - Scrollable */}
                <div className="overflow-y-auto flex-1 p-4">
                    {activeTab === 'instructions' && (
                        <div className="space-y-4">
                            <h3 className="font-bold text-gray-800 text-lg">طريقة تحضير {recipe.name}</h3>
                            <p className="text-gray-700 text-sm md:text-base">{recipe.name} هو طبق تقليدي رائع المذاق ومثالي للمناسبات العائلية. يتميز بنكهته الغنية ومكوناته البسيطة.</p>

                            <ol className="space-y-4 mt-4">
                                <li className="flex">
                                    <div className="flex-none w-6 h-6 bg-red-100 text-red-600 font-bold rounded-full flex items-center justify-center ml-3 mt-0.5">
                                        1
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-gray-800 text-sm md:text-base">اغسل جميع الخضروات جيدًا وقطعها إلى أحجام مناسبة.</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex-none w-6 h-6 bg-red-100 text-red-600 font-bold rounded-full flex items-center justify-center ml-3 mt-0.5">
                                        2
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-gray-800 text-sm md:text-base">في قدر كبير، سخّن الزيت على نار متوسطة وأضف البصل. قلبه حتى يصبح شفافاً.</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex-none w-6 h-6 bg-red-100 text-red-600 font-bold rounded-full flex items-center justify-center ml-3 mt-0.5">
                                        3
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-gray-800 text-sm md:text-base">أضف باقي المكونات واتركها على نار هادئة لمدة 30 دقيقة.</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex-none w-6 h-6 bg-red-100 text-red-600 font-bold rounded-full flex items-center justify-center ml-3 mt-0.5">
                                        4
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-gray-800 text-sm md:text-base">قدم الطبق ساخناً مع الخبز الطازج.</p>
                                    </div>
                                </li>
                            </ol>

                            <div className="bg-blue-50 p-3 rounded-lg mt-6">
                                <h4 className="font-semibold text-gray-800 mb-2">نصائح</h4>
                                <ul className="space-y-1 text-xs md:text-sm">
                                    <li className="text-gray-700 flex items-start">
                                        <span className="text-blue-600 font-bold ml-2">•</span>
                                        يمكن تحضير الوصفة مسبقاً وتخزينها في الثلاجة لمدة تصل إلى يومين.
                                    </li>
                                    <li className="text-gray-700 flex items-start">
                                        <span className="text-blue-600 font-bold ml-2">•</span>
                                        للحصول على نكهة أفضل، أضف بعض الأعشاب الطازجة قبل التقديم.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {activeTab === 'ingredients' && (
                        <div className="space-y-4">
                            <h3 className="font-bold text-gray-800">المكونات</h3>
                            <p className="text-sm text-gray-600">لـ 4-6 أشخاص</p>

                            <ul className="space-y-2 mt-2">
                                <li className="flex items-center border-b border-gray-100 pb-2">
                                    <label className="flex items-center flex-1 cursor-pointer hover:bg-gray-50 p-1 rounded">
                                        <input type="checkbox" className="h-4 w-4 text-red-600 rounded focus:ring-red-500 ml-3" />
                                        <span className="text-gray-800 text-sm md:text-base">بصل</span>
                                        <span className="mr-auto text-gray-600 text-sm">1 حبة كبيرة</span>
                                    </label>
                                </li>
                                <li className="flex items-center border-b border-gray-100 pb-2">
                                    <label className="flex items-center flex-1 cursor-pointer hover:bg-gray-50 p-1 rounded">
                                        <input type="checkbox" className="h-4 w-4 text-red-600 rounded focus:ring-red-500 ml-3" />
                                        <span className="text-gray-800 text-sm md:text-base">طماطم</span>
                                        <span className="mr-auto text-gray-600 text-sm">3 حبات متوسطة</span>
                                    </label>
                                </li>
                                <li className="flex items-center border-b border-gray-100 pb-2">
                                    <label className="flex items-center flex-1 cursor-pointer hover:bg-gray-50 p-1 rounded">
                                        <input type="checkbox" className="h-4 w-4 text-red-600 rounded focus:ring-red-500 ml-3" />
                                        <span className="text-gray-800 text-sm md:text-base">فلفل أخضر</span>
                                        <span className="mr-auto text-gray-600 text-sm">2 حبة</span>
                                    </label>
                                </li>
                                <li className="flex items-center border-b border-gray-100 pb-2">
                                    <label className="flex items-center flex-1 cursor-pointer hover:bg-gray-50 p-1 rounded">
                                        <input type="checkbox" className="h-4 w-4 text-red-600 rounded focus:ring-red-500 ml-3" />
                                        <span className="text-gray-800 text-sm md:text-base">زيت زيتون</span>
                                        <span className="mr-auto text-gray-600 text-sm">3 ملاعق كبيرة</span>
                                    </label>
                                </li>
                                <li className="flex items-center border-b border-gray-100 pb-2">
                                    <label className="flex items-center flex-1 cursor-pointer hover:bg-gray-50 p-1 rounded">
                                        <input type="checkbox" className="h-4 w-4 text-red-600 rounded focus:ring-red-500 ml-3" />
                                        <span className="text-gray-800 text-sm md:text-base">ملح</span>
                                        <span className="mr-auto text-gray-600 text-sm">حسب الرغبة</span>
                                    </label>
                                </li>
                                <li className="flex items-center border-b border-gray-100 pb-2">
                                    <label className="flex items-center flex-1 cursor-pointer hover:bg-gray-50 p-1 rounded">
                                        <input type="checkbox" className="h-4 w-4 text-red-600 rounded focus:ring-red-500 ml-3" />
                                        <span className="text-gray-800 text-sm md:text-base">فلفل أسود</span>
                                        <span className="mr-auto text-gray-600 text-sm">1/2 ملعقة صغيرة</span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    )}

                    {activeTab === 'nutrition' && (
                        <div className="space-y-4">
                            <h3 className="font-bold text-gray-800">القيمة الغذائية</h3>
                            <p className="text-sm text-gray-600">لكل وجبة</p>

                            <div className="bg-white border border-gray-200 rounded-lg p-3">
                                <div className="border-b border-gray-100 pb-3 mb-3">
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-gray-800">السعرات الحرارية</span>
                                        <span className="text-gray-700">350 سعر حراري</span>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-gray-800 text-sm md:text-base">البروتين</span>
                                        <span className="text-gray-700 text-sm md:text-base">12 غرام</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-800 text-sm md:text-base">الدهون</span>
                                        <span className="text-gray-700 text-sm md:text-base">18 غرام</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-800 text-sm md:text-base">الكربوهيدرات</span>
                                        <span className="text-gray-700 text-sm md:text-base">40 غرام</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-800 text-sm md:text-base">الألياف</span>
                                        <span className="text-gray-700 text-sm md:text-base">5 غرام</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-xs text-gray-500 mt-3">
                                * القيم الغذائية تقريبية وتعتمد على المكونات المستخدمة.
                            </p>
                        </div>
                    )}
                </div>

                {/* Modal Footer */}
                <div className="border-t border-gray-100 p-3 md:p-4 flex justify-between items-center">
                    <button
                        onClick={onClose}
                        className="px-4 md:px-6 py-1.5 md:py-2 text-gray-600 hover:text-gray-800 font-medium text-sm"
                    >
                        إغلاق
                    </button>

                    <button
                        onClick={() => onEdit(recipe)}
                        className="bg-red-600 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                    >
                        تعديل الوصفة
                    </button>
                </div>
            </div>
        </div>
    );
}