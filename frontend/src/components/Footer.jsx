import { ChefHat } from 'lucide-react';

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-reverse space-x-2 mb-4">
                            <ChefHat className="h-8 w-8 text-red-500" />
                            <span className="text-xl font-bold">كتاب الطبخ الجزائري</span>
                        </div>
                        <p className="text-gray-400">
                            منصة شاملة لتعلم الطبخ الجزائري التقليدي والحديث
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <button onClick={() => scrollToSection('recipes')} className="hover:text-white bg-transparent p-0 m-0 border-0">الوصفات</button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('features')} className="hover:text-white bg-transparent p-0 m-0 border-0">المجتمع</button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('about')} className="hover:text-white bg-transparent p-0 m-0 border-0">المدونة</button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('about')} className="hover:text-white bg-transparent p-0 m-0 border-0">اتصل بنا</button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">الحساب</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <button onClick={() => scrollToSection('home')} className="hover:text-white bg-transparent p-0 m-0 border-0">تسجيل الدخول</button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('home')} className="hover:text-white bg-transparent p-0 m-0 border-0">إنشاء حساب</button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('home')} className="hover:text-white bg-transparent p-0 m-0 border-0">الملف الشخصي</button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('home')} className="hover:text-white bg-transparent p-0 m-0 border-0">الوصفات المفضلة</button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">تابعنا</h3>
                        <div className="flex space-x-reverse space-x-4">
                            <button className="text-gray-400 hover:text-white">Facebook</button>
                            <button className="text-gray-400 hover:text-white">Instagram</button>
                            <button className="text-gray-400 hover:text-white">YouTube</button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 كتاب الطبخ الجزائري. جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    );
}