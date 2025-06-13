import React from 'react';
import SideBar from './SideBar';

export default function MobileSideBar({ isOpen, onClose, activeTab, onNavigate }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-40 md:hidden">
            <div
                className="absolute inset-0 bg-black/50"
                onClick={onClose}
            ></div>
            <div className="absolute top-0 right-0 bottom-0 w-64 bg-white shadow-lg">
                <SideBar
                    onNavigate={onNavigate}
                    activeTab={activeTab}
                    isMobile={true}
                    onClose={onClose}
                />
            </div>
        </div>
    );
}