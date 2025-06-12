import { Clock, Star, Heart, Eye } from 'lucide-react';

const recipes = [
    { name: 'كسكس بالخضار', time: '45 دقيقة', difficulty: 'متوسط', image: 'bg-gradient-to-br from-yellow-300 to-orange-400' },
    { name: 'شوربة فريك', time: '30 دقيقة', difficulty: 'سهل', image: 'bg-gradient-to-br from-green-300 to-teal-400' },
    { name: 'بقلاوة', time: '90 دقيقة', difficulty: 'صعب', image: 'bg-gradient-to-br from-amber-300 to-yellow-400' }
];

function RecipeCard({ recipe }) {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className={`h-48 ${recipe.image}`}></div>
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{recipe.name}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {recipe.time}
                    </div>
                    <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1" />
                        {recipe.difficulty}
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <button className="text-red-600 hover:text-red-700 font-semibold">
                        اقرأ الوصفة
                    </button>
                    <div className="flex items-center space-x-reverse space-x-2">
                        <button className="text-gray-400 hover:text-red-500">
                            <Heart className="h-5 w-5" />
                        </button>
                        <div className="flex items-center text-gray-500">
                            <Eye className="h-4 w-4 mr-1" />
                            <span className="text-sm">1.2k</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function SampleRecipesSection() {
    return (
        <section id="recipes" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        وصفات مميزة
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        تذوق أشهى الأطباق الجزائرية
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {recipes.map((recipe, index) => (
                        <RecipeCard key={index} recipe={recipe} />
                    ))}
                </div>
            </div>
        </section>
    );
}