import React, { useEffect, useState } from 'react';
import { ChefHat, User, Plus, BookOpen, LogOut, Heart, X } from 'lucide-react';
import SideBarButton from './SideBarButton'; // Correct casing
import ProfileCard from './ProfileCard';

export default function SideBar({ onNavigate, activeTab, isMobile, onClose }) {
    const [isAnimating, setIsAnimating] = useState(false);

    // Set up continuous animation effect for pro features
    useEffect(() => {
        // Start animation after a delay
        const timer = setTimeout(() => {
            setIsAnimating(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <aside className="bg-white shadow-lg flex flex-col py-6 md:py-8 px-4 min-h-screen sticky top-0 transition-all duration-300 hover:shadow-xl w-64">
            {isMobile && (
                <button
                    onClick={onClose}
                    className="absolute top-4 left-4 p-1 text-gray-500 hover:text-gray-700"
                >
                    <X className="h-6 w-6" />
                </button>
            )}

            {/* Logo and Brand */}
            <div className="flex items-center mb-8 md:mb-10 cursor-pointer hover:opacity-90 transition-opacity" onClick={() => onNavigate && onNavigate('dashboard')}>
                <div className="bg-red-50 rounded-lg p-2">
                    <ChefHat className="h-6 w-6 md:h-8 md:w-8 text-red-600" />
                </div>
                <div className="mr-3">
                    <span className="text-lg md:text-xl font-bold text-gray-900 block">كتاب الطبخ</span>
                    <span className="text-xs text-gray-500">لوحة التحكم</span>
                </div>
            </div>

            {/* Navigation Links */}
            <div className="mb-6">
                <h3 className="text-xs uppercase text-gray-500 mb-3 font-semibold tracking-wider">القائمة الرئيسية</h3>
                <nav className="flex flex-col gap-1 md:gap-2">
                    <SideBarButton
                        active={activeTab === 'recipes'}
                        icon={<BookOpen className="h-5 w-5" />}
                        label="وصفاتي"
                        onClick={() => { onNavigate && onNavigate('dashboard'); if (isMobile && onClose) onClose(); }}
                        badgeCount={6}
                    />
                    <SideBarButton
                        active={activeTab === 'create'}
                        icon={<Plus className="h-5 w-5" />}
                        label="إضافة وصفة"
                        onClick={() => { onNavigate && onNavigate('create'); if (isMobile && onClose) onClose(); }}
                    />
                    <SideBarButton
                        active={activeTab === 'favorites'}
                        icon={<Heart className="h-5 w-5" />}
                        label="المفضلة"
                        onClick={() => { onNavigate && onNavigate('favorites'); if (isMobile && onClose) onClose(); }}
                        badgeCount={3}
                    />
                </nav>
            </div>

            {/* Account Section */}
            <div className="mb-6">
                <h3 className="text-xs uppercase text-gray-500 mb-3 font-semibold tracking-wider">الحساب</h3>
                <nav className="flex flex-col gap-1 md:gap-2">
                    <SideBarButton
                        active={activeTab === 'profile'}
                        icon={<User className="h-5 w-5" />}
                        label="الملف الشخصي"
                        onClick={() => { onNavigate && onNavigate('profile'); if (isMobile && onClose) onClose(); }}
                    />
                    <SideBarButton
                        icon={<LogOut className="h-5 w-5" />}
                        label="تسجيل الخروج"
                        onClick={() => { onNavigate && onNavigate('landing'); if (isMobile && onClose) onClose(); }}
                    />
                </nav>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-4"></div>

            {/* Profile Card - Hide on small mobile screens in sidebar */}
            <div className="hidden sm:block">
                <ProfileCard />
            </div>

            {/* Pro Features with continuous animation */}
            <div className={`mt-6 bg-gradient-to-r from-red-600 to-orange-500 text-white p-3 md:p-4 rounded-lg relative overflow-hidden ${isAnimating ? 'animate-pulse-subtle' : ''}`}>
                {/* Animated gradient overlay */}
                <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer"
                    style={{
                        animation: isAnimating ? 'shimmer 3s ease-in-out infinite' : 'none'
                    }}
                ></div>

                <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base relative z-10">ترقية للنسخة المميزة</h3>
                <p className="text-xs md:text-sm text-white/90 mb-2 md:mb-3 relative z-10">احصل على ميزات إضافية واستمتع بتجربة خالية من الإعلانات</p>
                <button
                    onClick={() => { onNavigate && onNavigate('upgrade'); if (isMobile && onClose) onClose(); }}
                    className="bg-white text-red-600 text-xs md:text-sm py-1 md:py-1.5 px-2 md:px-3 rounded-md font-medium hover:bg-gray-50 transition w-full relative z-10 hover:shadow-md"
                >
                    ترقية الآن
                </button>
            </div>
        </aside>
    );
}