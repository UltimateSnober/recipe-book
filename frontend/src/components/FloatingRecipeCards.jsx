import React from 'react';

export default function FloatingRecipeCards() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
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
    );
}