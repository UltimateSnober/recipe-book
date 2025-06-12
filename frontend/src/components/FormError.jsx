import React from 'react';

export default function FormError({ error }) {
    if (!error) return null;
    return (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
            {error}
        </div>
    );
}