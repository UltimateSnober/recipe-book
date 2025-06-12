import React from 'react';
import { User } from 'lucide-react';

export default function ProfileButton({ onClick, compact = false }) {
    if (compact) {
        return (
            <button
                onClick={onClick}
                className="flex items-center justify-center bg-red-600 text-white w-9 h-9 rounded-full hover:bg-red-700 transition"
            >
                <User className="h-5 w-5" />
            </button>
        );
    }
    
    return (
        <button
            onClick={onClick}
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
            <User className="h-5 w-5" />
            <span>حسابي</span>
        </button>
    );
}