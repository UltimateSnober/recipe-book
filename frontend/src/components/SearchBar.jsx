import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ value, onChange }) {
    return (
        <div className="relative w-full md:w-64">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
                type="text"
                placeholder="ابحث عن وصفة..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent w-full"
            />
        </div>
    );
}