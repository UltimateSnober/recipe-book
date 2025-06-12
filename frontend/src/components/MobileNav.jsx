import React from 'react';
import { Home, Plus, Heart, User } from 'lucide-react';

export default function MobileNav({ activeTab, onNavigate }) {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-30">
            <div className="flex items-center justify-around relative">
                <NavButton
                    icon={<User />}
                    label="حسابي"
                    isActive={activeTab === 'profile'}
                    onClick={() => onNavigate && onNavigate('profile')}
                />
                <NavButton
                    icon={<Heart />}
                    label="المفضلة"
                    isActive={activeTab === 'favorites'}
                    onClick={() => onNavigate && onNavigate('favorites')}
                />
                {/* Center Add Button */}
                <div className="flex-1 flex justify-center">
                    <button
                        onClick={() => onNavigate && onNavigate('create')}
                        className="bg-red-600 text-white p-3 rounded-full shadow-lg -mt-6 border-4 border-white"
                    >
                        <Plus className="h-6 w-6" />
                    </button>
                </div>
                <NavButton
                    icon={<Home />}
                    label="الرئيسية"
                    isActive={activeTab === 'recipes' || activeTab === 'dashboard'}
                    onClick={() => onNavigate && onNavigate('dashboard')}
                />
            </div>
        </div>
    );
}

function NavButton({ icon, label, isActive, onClick }) {
    return (
        <button
            onClick={onClick}
            className="flex flex-col items-center justify-center py-2 px-4 flex-1"
        >
            <div className={`p-1 ${isActive ? 'text-red-600' : 'text-gray-600'}`}>
                {React.cloneElement(icon, { className: 'h-5 w-5' })}
            </div>
            <span className={`text-xs mt-0.5 ${isActive ? 'text-red-600 font-medium' : 'text-gray-600'}`}>
                {label}
            </span>
        </button>
    );
}