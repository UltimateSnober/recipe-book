import React from 'react';
import { Edit2, X, Book, Heart, Award, Clock } from 'lucide-react';

export default function ProfileHeader({ profileData, editMode, onEditToggle }) {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-6">
            {/* Top colored banner */}
            <div className="h-24 bg-gradient-to-r from-red-400 to-yellow-400 relative">
                {/* Edit button positioned on the banner */}
                <div className="absolute bottom-4 left-4">
                    {!editMode ? (
                        <button
                            onClick={onEditToggle}
                            className="flex items-center gap-2 bg-white text-red-600 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors shadow-md"
                        >
                            <Edit2 className="h-4 w-4" />
                            <span>تعديل الملف</span>
                        </button>
                    ) : (
                        <button
                            onClick={onEditToggle}
                            className="flex items-center gap-2 bg-white text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors shadow-md"
                        >
                            <X className="h-4 w-4" />
                            <span>إلغاء</span>
                        </button>
                    )}
                </div>
            </div>

            {/* User info section */}
            <div className="p-6 pt-4">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{profileData.name}</h1>
                <p className="text-gray-600 mb-6">{profileData.bio}</p>

                {/* Stats cards */}
                <ProfileStats stats={profileData.stats} />
            </div>
        </div>
    );
}

function ProfileStats({ stats }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard
                icon={<Book className="h-5 w-5 text-red-600" />}
                value={stats.recipes}
                label="وصفة"
                colorClass="from-red-50 to-red-100"
                textColor="text-red-600"
            />

            <StatCard
                icon={<Heart className="h-5 w-5 text-amber-600" />}
                value={stats.favorites}
                label="مفضلة"
                colorClass="from-amber-50 to-amber-100"
                textColor="text-amber-600"
            />

            <StatCard
                icon={<Award className="h-5 w-5 text-orange-600" />}
                value={stats.skillLevel}
                label="المستوى"
                colorClass="from-orange-50 to-orange-100"
                textColor="text-orange-600"
            />

            <StatCard
                icon={<Clock className="h-5 w-5 text-rose-600" />}
                value={stats.totalCookingTime}
                label="وقت الطهي"
                colorClass="from-rose-50 to-rose-100"
                textColor="text-rose-600"
            />
        </div>
    );
}

function StatCard({ icon, value, label, colorClass, textColor }) {
    return (
        <div className={`bg-gradient-to-br ${colorClass} p-4 rounded-xl flex items-center gap-3`}>
            <div className="bg-white p-2 rounded-full">
                {icon}
            </div>
            <div>
                <p className={`text-xl font-bold ${textColor}`}>{value}</p>
                <p className="text-sm text-gray-600">{label}</p>
            </div>
        </div>
    );
}