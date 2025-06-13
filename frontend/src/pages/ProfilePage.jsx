import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import MobileNav from '../components/MobileNav';
import ProfileHeader from '../components/ProfileHeader';
import ProfilePersonalInfo from '../components/ProfilePersonalInfo';
import ProfileSettings from '../components/ProfileSettings';
import MobileSideBar from '../components/MobileSideBar';
import { ChevronLeft } from 'lucide-react';

// Sample user data - in a real application, this would come from your authentication system
const userData = {
    name: "سارة أحمد",
    email: "sara.ahmed@example.com",
    phone: "+966 55 123 4567",
    dateJoined: "15 يناير 2023",
    location: "الرياض، المملكة العربية السعودية",
    bio: "طباخة هاوية ومحبة للوصفات التقليدية. أستمتع بتجربة وصفات جديدة.",
    stats: {
        recipes: 24,
        favorites: 15,
        totalCookingTime: "35 ساعة",
        skillLevel: "متوسط"
    }
};

export default function ProfilePage({ onNavigate }) {
    const [activeTab, setActiveTab] = useState('profile');
    const [showMobileSidebar, setShowMobileSidebar] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [profileData, setProfileData] = useState(userData);
    const [activeSection, setActiveSection] = useState('personal');

    const handleLogout = () => {
        // In a real app, handle logout logic here
        onNavigate && onNavigate('landing');
    };

    const handleSaveProfile = (updatedData) => {
        // In a real app, you would save the profileData to your backend
        setProfileData(updatedData);
        setEditMode(false);
        // Show success message
        alert("تم حفظ التغييرات بنجاح!");
    };

    const toggleMobileSidebar = () => {
        setShowMobileSidebar(!showMobileSidebar);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 flex flex-col md:flex-row" dir="rtl">
            {/* Desktop Sidebar */}
            <div className="hidden md:block">
                <SideBar onNavigate={onNavigate} activeTab={activeTab} />
            </div>

            {/* Mobile Sidebar - shown when toggled */}
            <MobileSideBar
                isOpen={showMobileSidebar}
                onClose={() => setShowMobileSidebar(false)}
                activeTab={activeTab}
                onNavigate={onNavigate}
            />

            <main className="flex-1 flex flex-col p-4 md:p-8">
                {/* Mobile Header */}
                <div className="flex justify-between items-center mb-6 md:hidden">
                    <button
                        onClick={toggleMobileSidebar}
                        className="p-2 rounded-full bg-white shadow-sm"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <h1 className="text-xl font-bold text-gray-800">الملف الشخصي</h1>
                    <div className="w-10"></div> {/* Placeholder for alignment */}
                </div>

                {/* Profile Header */}
                <ProfileHeader
                    profileData={profileData}
                    editMode={editMode}
                    onEditToggle={() => setEditMode(!editMode)}
                />

                {/* Content Area */}
                <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-20 md:mb-0">
                    {/* Tabs */}
                    <TabsNavigation
                        activeSection={activeSection}
                        onSelectTab={setActiveSection}
                    />

                    {/* Personal Information Section */}
                    {activeSection === 'personal' && (
                        <ProfilePersonalInfo
                            profileData={profileData}
                            editMode={editMode}
                            onCancel={() => setEditMode(false)}
                            onSave={handleSaveProfile}
                        />
                    )}

                    {/* Account Settings */}
                    {activeSection === 'settings' && (
                        <ProfileSettings onLogout={handleLogout} />
                    )}
                </div>
            </main>

            {/* Mobile Bottom Navigation */}
            <MobileNav activeTab={activeTab} onNavigate={onNavigate} />
        </div>
    );
}

function TabsNavigation({ activeSection, onSelectTab }) {
    return (
        <div className="flex border-b border-gray-200 mb-6">
            <button
                className={`pb-3 px-4 font-medium ${activeSection === 'personal' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => onSelectTab('personal')}
            >
                المعلومات الشخصية
            </button>
            <button
                className={`pb-3 px-4 font-medium ${activeSection === 'settings' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => onSelectTab('settings')}
            >
                الإعدادات
            </button>
        </div>
    );
}
