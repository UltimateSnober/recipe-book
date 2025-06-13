import React, { useState, useEffect, useRef } from 'react';

export default function LanguageSelector() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('ar');
    const menuRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    // Load saved language on mount
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            setSelectedLanguage(savedLanguage);
        }
    }, []);

    const languages = [
        { id: 'ar', name: 'العربية', flag: '🇸🇦' },
        { id: 'en', name: 'English', flag: '🇬🇧' },
        { id: 'fr', name: 'Français', flag: '🇫🇷' },
    ];

    const handleLanguageChange = (langId) => {
        setSelectedLanguage(langId);
        setIsOpen(false);

        // Save to localStorage
        localStorage.setItem('language', langId);

        // Here you would actually apply the language change
        // changeAppLanguage(langId);

        // For demonstration - would be handled by your i18n system
        // document.documentElement.dir = langId === 'ar' ? 'rtl' : 'ltr';
        // document.documentElement.lang = langId;
    };

    // Find current language object
    const currentLanguage = languages.find(lang => lang.id === selectedLanguage);

    return (
        <div className="relative" ref={menuRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                <span className="flex items-center gap-2">
                    <span className="text-lg" role="img" aria-label={`${currentLanguage.name} flag`}>
                        {currentLanguage.flag}
                    </span>
                    <span>{currentLanguage.name}</span>
                </span>
                <svg className={`h-4 w-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>

            {/* Dropdown menu */}
            {isOpen && (
                <div
                    className="absolute left-0 mt-1 w-40 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                    role="menu"
                    aria-orientation="vertical"
                    tabIndex="-1"
                >
                    <div className="py-1" role="none">
                        {languages.map((language) => (
                            <button
                                key={language.id}
                                onClick={() => handleLanguageChange(language.id)}
                                className={`
                  w-full text-right px-4 py-2 text-sm flex items-center justify-between
                  ${selectedLanguage === language.id
                                        ? 'bg-red-50 text-red-700'
                                        : 'text-gray-700 hover:bg-gray-50'}
                `}
                                role="menuitem"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-lg" role="img" aria-label={`${language.name} flag`}>
                                        {language.flag}
                                    </span>
                                    <span>{language.name}</span>
                                </div>

                                {selectedLanguage === language.id && (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}