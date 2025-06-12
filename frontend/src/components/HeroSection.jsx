import FloatingRecipeCards from './FloatingRecipeCards';

export default function HeroSection({ onNavigate }) {
    return (
        <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                    اكتشف أصالة
                    <span className="text-red-600 block">المطبخ الجزائري</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                    مجموعة شاملة من الوصفات الجزائرية التقليدية والحديثة، مع تعليمات مفصلة وصور عالية الجودة
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => onNavigate && onNavigate('register')}
                        className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
                    >
                        ابدأ الآن مجاناً
                    </button>
                    <button
                        onClick={() => {
                            const el = document.getElementById('recipes');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300"
                    >
                        تصفح الوصفات
                    </button>
                </div>
            </div>
            {/* Floating Recipe Cards - hidden on mobile */}
            <FloatingRecipeCards />
        </section>
    );
}