import React, { useState } from 'react';
import { User, Mail, Phone, Calendar, MapPin } from 'lucide-react';

export default function ProfilePersonalInfo({ profileData, editMode, onCancel, onSave }) {
    const [formData, setFormData] = useState(profileData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    if (!editMode) {
        return <ProfileInfoDisplay profileData={profileData} />;
    }

    return <ProfileInfoForm profileData={formData} onChange={handleChange} onCancel={onCancel} onSubmit={handleSubmit} />;
}

function ProfileInfoDisplay({ profileData }) {
    return (
        <div className="space-y-6">
            <InfoItem
                icon={<User className="h-5 w-5 text-red-600" />}
                label="الاسم"
                value={profileData.name}
            />

            <InfoItem
                icon={<Mail className="h-5 w-5 text-red-600" />}
                label="البريد الإلكتروني"
                value={profileData.email}
            />

            <InfoItem
                icon={<Phone className="h-5 w-5 text-red-600" />}
                label="رقم الهاتف"
                value={profileData.phone}
            />

            <InfoItem
                icon={<MapPin className="h-5 w-5 text-red-600" />}
                label="الموقع"
                value={profileData.location}
            />

            <InfoItem
                icon={<Calendar className="h-5 w-5 text-red-600" />}
                label="تاريخ الانضمام"
                value={profileData.dateJoined}
            />
        </div>
    );
}

function InfoItem({ icon, label, value }) {
    return (
        <div className="flex items-start gap-4">
            <div className="p-2 bg-red-50 rounded-full">
                {icon}
            </div>
            <div>
                <p className="text-sm text-gray-500 mb-1">{label}</p>
                <p className="text-gray-900">{value}</p>
            </div>
        </div>
    );
}

function ProfileInfoForm({ profileData, onChange, onCancel, onSubmit }) {
    return (
        <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-4">
                <FormField
                    label="الاسم"
                    name="name"
                    type="text"
                    value={profileData.name}
                    onChange={onChange}
                    required
                />

                <FormField
                    label="البريد الإلكتروني"
                    name="email"
                    type="email"
                    value={profileData.email}
                    onChange={onChange}
                    required
                />

                <FormField
                    label="رقم الهاتف"
                    name="phone"
                    type="tel"
                    value={profileData.phone}
                    onChange={onChange}
                />

                <FormField
                    label="الموقع"
                    name="location"
                    type="text"
                    value={profileData.location}
                    onChange={onChange}
                />

                <div className="block">
                    <label className="text-gray-700 block mb-1">نبذة شخصية</label>
                    <textarea
                        name="bio"
                        value={profileData.bio}
                        onChange={onChange}
                        rows="3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    ></textarea>
                </div>
            </div>

            <div className="flex gap-4 justify-end">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                >
                    إلغاء
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                    حفظ التغييرات
                </button>
            </div>
        </form>
    );
}

function FormField({ label, name, type, value, onChange, required = false }) {
    return (
        <label className="block">
            <span className="text-gray-700 block mb-1">{label}</span>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required={required}
            />
        </label>
    );
}