import React from 'react';
import { Lock, LogOut } from 'lucide-react';
import ThemeSelector from './ThemeSelector'; // Import the new component

export default function ProfileSettings({ onLogout }) {
    return (
        <div className="space-y-6">
            <SettingsItem
                icon={
                    <div className="p-2 bg-red-50 rounded-full">
                        <Lock className="h-5 w-5 text-red-600" />
                    </div>
                }
                title="كلمة المرور"
                description="قم بتغيير كلمة المرور الخاصة بك"
                action={<button className="text-red-600 hover:text-red-700">تغيير</button>}
            />

            {/* Updated theme settings item using the ThemeSelector component */}
            <SettingsItem
                icon={
                    <div className="p-2 bg-red-50 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                    </div>
                }
                title="المظهر"
                description="اختر المظهر المفضل"
                action={<ThemeSelector />}
            />

            <SettingsItem
                icon={
                    <div className="p-2 bg-red-50 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                        </svg>
                    </div>
                }
                title="اللغة"
                description="تغيير لغة التطبيق"
                action={
                    <select className="border-gray-300 rounded-md text-gray-700 text-sm">
                        <option value="ar">العربية</option>
                        <option value="en">English</option>
                        <option value="fr">Français</option>
                    </select>
                }
            />

            <SettingsItem
                icon={
                    <div className="p-2 bg-red-50 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </div>
                }
                title="تصدير البيانات"
                description="تنزيل نسخة من وصفاتك"
                action={<button className="text-red-600 hover:text-red-700">تصدير</button>}
            />

            <SettingsItem
                icon={
                    <div className="p-2 bg-red-50 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </div>
                }
                title="حذف الحساب"
                description="حذف حسابك بشكل نهائي"
                action={<button className="text-red-600 hover:text-red-700">حذف الحساب</button>}
                className="border-red-100"
            />

            {/* Logout Button */}
            <div className="mt-8 text-center">
                <button
                    onClick={onLogout}
                    className="flex items-center justify-center gap-2 mx-auto px-6 py-3 border border-red-200 text-red-600 rounded-md hover:bg-red-50 transition-colors"
                >
                    <LogOut className="h-4 w-4" />
                    <span>تسجيل الخروج</span>
                </button>
            </div>
        </div>
    );
}

function SettingsItem({ icon, title, description, action, className = "border-gray-200" }) {
    return (
        <div className={`p-4 border ${className} rounded-lg hover:shadow-sm transition-shadow`}>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    {icon}
                    <div>
                        <h3 className="font-medium text-gray-900">{title}</h3>
                        <p className="text-sm text-gray-500">{description}</p>
                    </div>
                </div>
                {action}
            </div>
        </div>
    );
}