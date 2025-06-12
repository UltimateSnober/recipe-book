import React from 'react';
import { User } from 'lucide-react';

export default function ProfileCard() {
    return (
        <div className="mt-auto pt-6 border-t border-gray-200">
            <div className="text-center">
                <div className="bg-gray-100 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <User className="h-8 w-8 text-gray-600" />
                </div>
                <p className="font-semibold text-gray-800">أحمد محمد</p>
                <p className="text-sm text-gray-500">طباخ هاوي</p>
            </div>
        </div>
    );
}