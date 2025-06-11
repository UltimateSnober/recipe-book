import React from 'react';

export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
                {children}
            </div>
        </div>
    );
}