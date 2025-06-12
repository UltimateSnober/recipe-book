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
            {/* Floating Recipe Cards */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 bg-white rounded-lg shadow-lg p-4 transform rotate-12 animate-bounce">
                    <div className="w-16 h-16 bg-red-100 rounded-lg mb-2"></div>
                    <p className="text-sm font-semibold">كسكس</p>
                </div>
                <div className="absolute top-32 right-10 bg-white rounded-lg shadow-lg p-4 transform -rotate-12 animate-bounce delay-1000">
                    <div className="w-16 h-16 bg-yellow-100 rounded-lg mb-2"></div>
                    <p className="text-sm font-semibold">بقلاوة</p>
                </div>
                <div className="absolute bottom-20 left-20 bg-white rounded-lg shadow-lg p-4 transform rotate-6 animate-bounce delay-2000">
                    <div className="w-16 h-16 bg-green-100 rounded-lg mb-2"></div>
                    <p className="text-sm font-semibold">شوربة</p>
                </div>
            </div>
        </section>
    );
}