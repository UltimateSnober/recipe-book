import React from 'react';

export default function Button({ children, className = '', ...props }) {
    return (
        <button
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}