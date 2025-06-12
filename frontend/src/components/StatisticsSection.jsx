import React from 'react';
import { Eye, Heart, Book } from 'lucide-react';

export default function StatisticsSection() {
    return (
        <div className="mt-8 md:mt-12 mb-20 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">إحصائياتي</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                {/* إجمالي الوصفات */}
                <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-2xl md:text-4xl font-bold text-red-600">6</h3>
                            <p className="text-sm text-gray-600">إجمالي الوصفات</p>
                        </div>
                        <div className="bg-red-100 p-2 rounded-lg">
                            <Book className="h-5 w-5 text-red-600" />
                        </div>
                    </div>
                </div>

                {/* وصفات مفضلة */}
                <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-2xl md:text-4xl font-bold text-amber-600">3</h3>
                            <p className="text-sm text-gray-600">وصفات مفضلة</p>
                        </div>
                        <div className="bg-amber-100 p-2 rounded-lg">
                            <Heart className="h-5 w-5 text-amber-600" />
                        </div>
                    </div>
                </div>

                {/* مجموع المشاهدات - تأكد من أن هذا العنصر يمتد بعرض الشاشة الكاملة على الشاشات الأصغر إذا لزم الأمر */}
                <div className="col-span-2 md:col-span-1 bg-white p-4 rounded-xl shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-2xl md:text-4xl font-bold text-green-600">8.2K</h3>
                            <p className="text-sm text-gray-600">مجموع المشاهدات</p>
                        </div>
                        <div className="bg-green-100 p-2 rounded-lg">
                            <Eye className="h-5 w-5 text-green-600" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}