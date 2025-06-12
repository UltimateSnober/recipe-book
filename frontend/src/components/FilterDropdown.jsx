import React, { useState, useRef, useEffect } from 'react';
import { Filter, ChevronDown, X } from 'lucide-react';

export default function FilterDropdown({ onFilterChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeFilters, setActiveFilters] = useState([]);
    const dropdownRef = useRef(null);

    const filterCategories = [
        {
            name: "التصنيف",
            options: ["أطباق رئيسية", "مقبلات", "حلويات", "مشروبات"]
        },
        {
            name: "وقت التحضير",
            options: ["أقل من 30 دقيقة", "30-60 دقيقة", "أكثر من ساعة"]
        },
        {
            name: "مستوى الصعوبة",
            options: ["سهل", "متوسط", "صعب"]
        },
        {
            name: "الترتيب",
            options: ["الأحدث", "الأكثر مشاهدة", "الأعلى تقييماً"]
        },
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleFilter = (filter) => {
        const updatedFilters = activeFilters.includes(filter)
            ? activeFilters.filter(f => f !== filter)
            : [...activeFilters, filter];

        setActiveFilters(updatedFilters);

        // Immediately notify parent component about filter change
        if (onFilterChange) {
            onFilterChange(updatedFilters);
        }
    };

    const clearFilters = () => {
        setActiveFilters([]);

        // Immediately notify parent component about cleared filters
        if (onFilterChange) {
            onFilterChange([]);
        }
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                className={`flex items-center gap-1 text-sm ${activeFilters.length ? 'text-red-600 border-red-300 bg-red-50' : 'text-gray-600 border-gray-300'} transition border rounded-lg px-2 md:px-3 py-2 hover:bg-gray-50`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <Filter className="h-4 w-4" />
                <span className="hidden sm:inline">تصفية</span>
                {activeFilters.length > 0 && (
                    <span className="inline-flex items-center justify-center bg-red-600 text-white text-xs h-5 w-5 rounded-full">
                        {activeFilters.length}
                    </span>
                )}
            </button>

            {isOpen && (
                <div className="absolute left-0 mt-2 w-72 max-w-[calc(100vw-2rem)] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="p-4">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-medium text-gray-900">خيارات التصفية</h3>
                            {activeFilters.length > 0 && (
                                <button
                                    onClick={clearFilters}
                                    className="text-sm text-red-600 hover:text-red-800 flex items-center gap-1"
                                >
                                    <X className="h-4 w-4" />
                                    مسح الكل
                                </button>
                            )}
                        </div>

                        {activeFilters.length > 0 && (
                            <div className="mb-4 flex flex-wrap gap-2">
                                {activeFilters.map(filter => (
                                    <span
                                        key={filter}
                                        className="bg-red-100 text-red-800 text-xs rounded-full px-3 py-1 flex items-center gap-1"
                                    >
                                        {filter}
                                        <X
                                            className="h-3 w-3 cursor-pointer"
                                            onClick={() => toggleFilter(filter)}
                                        />
                                    </span>
                                ))}
                            </div>
                        )}

                        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
                            {filterCategories.map(category => (
                                <div key={category.name} className="border-b border-gray-100 pb-3">
                                    <h4 className="text-sm font-medium text-gray-700 mb-2">{category.name}</h4>
                                    <div className="space-y-2">
                                        {category.options.map(option => (
                                            <label
                                                key={option}
                                                className="flex items-center gap-2 text-sm text-gray-700 hover:bg-gray-50 rounded p-1 cursor-pointer"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="rounded text-red-600 focus:ring-red-500"
                                                    checked={activeFilters.includes(option)}
                                                    onChange={() => toggleFilter(option)}
                                                />
                                                {option}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}