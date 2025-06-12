import { ChefHat, Menu, X } from 'lucide-react';
import React, { useState } from 'react';

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function NavigationBar({ onNavigate }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-reverse space-x-2">
                        <ChefHat className="h-8 w-8 text-red-600" />
                        <span className="text-xl font-bold text-gray-900">كتاب الطبخ الجزائري</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-reverse space-x-8">
                        <button
                            onClick={() => scrollToSection('home')}
                            className="text-gray-700 hover:text-red-600 transition-colors"
                        >
                            الرئيسية
                        </button>
                        <button
                            onClick={() => scrollToSection('features')}
                            className="text-gray-700 hover:text-red-600 transition-colors"
                        >
                            المميزات
                        </button>
                        <button
                            onClick={() => scrollToSection('recipes')}
                            className="text-gray-700 hover:text-red-600 transition-colors"
                        >
                            الوصفات
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-gray-700 hover:text-red-600 transition-colors"
                        >
                            من نحن
                        </button>
                    </div>
                    <div className="hidden md:flex items-center space-x-reverse space-x-4">
                        <button onClick={() => onNavigate && onNavigate('login')} className="text-gray-700 hover:text-red-600 transition-colors">تسجيل الدخول</button>
                        <button onClick={() => onNavigate && onNavigate('register')} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">إنشاء حساب</button>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-red-600">
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <button
                            onClick={() => { scrollToSection('home'); setIsMenuOpen(false); }}
                            className="block w-full text-right px-3 py-2 text-gray-700 hover:text-red-600"
                        >
                            الرئيسية
                        </button>
                        <button
                            onClick={() => { scrollToSection('features'); setIsMenuOpen(false); }}
                            className="block w-full text-right px-3 py-2 text-gray-700 hover:text-red-600"
                        >
                            المميزات
                        </button>
                        <button
                            onClick={() => { scrollToSection('recipes'); setIsMenuOpen(false); }}
                            className="block w-full text-right px-3 py-2 text-gray-700 hover:text-red-600"
                        >
                            الوصفات
                        </button>
                        <button
                            onClick={() => { scrollToSection('about'); setIsMenuOpen(false); }}
                            className="block w-full text-right px-3 py-2 text-gray-700 hover:text-red-600"
                        >
                            من نحن
                        </button>
                        <button onClick={() => { onNavigate && onNavigate('login'); setIsMenuOpen(false); }} className="block w-full text-right px-3 py-2 text-gray-700 hover:text-red-600">تسجيل الدخول</button>
                        <button onClick={() => { onNavigate && onNavigate('register'); setIsMenuOpen(false); }} className="block w-full text-right px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">إنشاء حساب</button>
                    </div>
                </div>
            )}
        </nav>
    );
}