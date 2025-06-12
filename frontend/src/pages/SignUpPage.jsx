import React, { useState } from 'react';
import { ChefHat } from 'lucide-react';
import FormInput from '../components/FormInput';
import FormError from '../components/FormError';

export default function SignUpPage({ onNavigate }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        setLoading(true);
        setError('');
        if (formData.password !== formData.confirmPassword) {
            setError('كلمات المرور غير متطابقة');
            setLoading(false);
            return;
        }
        // Mock registration success
        setTimeout(() => {
            setLoading(false);
            onNavigate('dashboard');
        }, 1000);
    };

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center px-4" dir="rtl">
            <div className="max-w-md w-full">
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <div className="text-center mb-8">
                        <ChefHat className="h-12 w-12 text-red-600 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-gray-900">إنشاء حساب جديد</h2>
                        <p className="text-gray-600 mt-2">انضم إلى مجتمع الطباخين الجزائريين</p>
                    </div>
                    <FormError error={error} />
                    <div className="space-y-6">
                        <FormInput
                            label="الاسم الكامل"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="أدخل اسمك الكامل"
                            required
                        />
                        <FormInput
                            label="البريد الإلكتروني"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="أدخل بريدك الإلكتروني"
                            required
                        />
                        <FormInput
                            label="كلمة المرور"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="أدخل كلمة المرور"
                            required
                        />
                        <FormInput
                            label="تأكيد كلمة المرور"
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="أعد إدخال كلمة المرور"
                            required
                        />
                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={loading}
                            className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'جاري إنشاء الحساب...' : 'إنشاء الحساب'}
                        </button>
                    </div>
                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            لديك حساب بالفعل؟{' '}
                            <button
                                onClick={() => onNavigate('login')}
                                className="text-red-600 hover:text-red-700 font-semibold"
                            >
                                تسجيل الدخول
                            </button>
                        </p>
                    </div>
                    <div className="mt-4 text-center">
                        <button
                            onClick={() => onNavigate('landing')}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            العودة للرئيسية
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}