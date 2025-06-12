export default function CTASection({ onNavigate }) {
    return (
        <section className="py-20 bg-gradient-to-br from-red-700 to-orange-600 text-white">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    ابدأ رحلتك في عالم الطبخ الجزائري
                </h2>
                <p className="text-xl mb-8 opacity-90">
                    انضم إلى آلاف الطباخين الذين يتعلمون ويشاركون أفضل الوصفات الجزائرية
                </p>
                <button
                    onClick={() => onNavigate && onNavigate('register')}
                    className="bg-white text-red-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                    إنشاء حساب مجاني
                </button>
            </div>
        </section>
    );
}