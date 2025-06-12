import React from 'react';
import { Search, Menu } from 'lucide-react';
import FilterDropdown from './FilterDropdown';
import ProfileButton from './ProfileButton';

export default function DashboardHeader({ onProfile, searchQuery, onSearchChange, onFilterChange, onMenuClick }) {
    return (
        <header className="bg-white shadow-md px-4 md:px-8 py-4 sticky top-0 z-30">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        {/* Menu button for mobile */}
                        <button
                            className="md:hidden ml-2 p-1 text-gray-600"
                            onClick={onMenuClick}
                        >
                            <Menu className="h-6 w-6" />
                        </button>

                        <div>
                            <h1 className="text-xl md:text-2xl font-bold text-gray-900">وصفاتي</h1>
                            <p className="text-xs md:text-sm text-gray-500 hidden sm:block">اكتشف وصفاتك المحفوظة والمفضلة</p>
                        </div>
                    </div>

                    {/* Profile button only on mobile */}
                    <div className="md:hidden">
                        <ProfileButton onClick={onProfile} compact={true} />
                    </div>
                </div>

                <div className="flex flex-row md:items-center gap-2 md:gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64 md:flex-none">
                        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="ابحث عن وصفة..."
                            value={searchQuery}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="pl-3 pr-10 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent w-full"
                        />
                    </div>
                    <FilterDropdown onFilterChange={onFilterChange} />

                    {/* Profile button only on desktop */}
                    <div className="hidden md:block">
                        <ProfileButton onClick={onProfile} />
                    </div>
                </div>
            </div>
        </header>
    );
}