import React from 'react';

export default function SideBarButton({ icon, label, onClick, active, badgeCount }) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-2 px-3 py-2.5 rounded-lg transition font-medium w-full justify-between
                ${active ? 'text-red-600 bg-red-50' : 'text-gray-700 hover:bg-orange-50'}
            `}
        >
            <div className="flex items-center gap-3">
                <span className={active ? 'text-red-600' : 'text-gray-500'}>
                    {icon}
                </span>
                <span>{label}</span>
            </div>
            {badgeCount !== undefined && (
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${active ? 'bg-red-200 text-red-800' : 'bg-gray-200 text-gray-700'}`}>
                    {badgeCount}
                </span>
            )}
        </button>
    );
}