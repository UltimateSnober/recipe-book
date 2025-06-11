import React from 'react';

export default function Input({ className = '', ...props }) {
    return (
        <input
            className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${className}`}
            {...props}
        />
    );
}