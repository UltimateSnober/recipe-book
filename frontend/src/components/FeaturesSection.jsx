import { BookOpen, Users, Star } from 'lucide-react';

export default function FeaturesSection() {
    return (
        <section id="features" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        لماذا تختار كتاب الطبخ الجزائري؟
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        نوفر لك أفضل تجربة لتعلم الطبخ الجزائري التقليدي والحديث
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <BookOpen className="h-8 w-8 text-red-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">مجموعة ضخمة من الوصفات</h3>
                        <p className="text-gray-600">أكثر من 500 وصفة جزائرية تقليدية وحديثة مع تعليمات مفصلة</p>
                    </div>
                    <div className="text-center p-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users className="h-8 w-8 text-yellow-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">مجتمع نشط</h3>
                        <p className="text-gray-600">شارك تجاربك وتعلم من الطباخين الآخرين في مجتمعنا</p>
                    </div>
                    <div className="text-center p-8 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Star className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">جودة عالية</h3>
                        <p className="text-gray-600">صور عالية الجودة وفيديوهات تعليمية لكل وصفة</p>
                    </div>
                </div>
            </div>
        </section>
    );
}