import React, { useState } from 'react';
import { ChefHat } from 'lucide-react';
import FormInput from '../components/FormInput';
import FormError from '../components/FormError';

export default function SignInPage({ onNavigate }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        setLoading(true);
        setError('');
        // Mock login success
        setTimeout(() => {
            setLoading(false);
            onNavigate('dashboard');
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center px-4" dir="rtl">
            <div className="max-w-md w-full">
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <div className="text-center mb-8">
                        <ChefHat className="h-12 w-12 text-red-600 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-gray-900">تسجيل الدخول</h2>
                        <p className="text-gray-600 mt-2">أهلاً بك في كتاب الطبخ الجزائري</p>
                    </div>
                    <FormError error={error} />
                    <div className="space-y-6">
                        <FormInput
                            label="البريد الإلكتروني"
                            type="email"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="أدخل بريدك الإلكتروني"
                            required
                        />
                        <FormInput
                            label="كلمة المرور"
                            type="password"
                            name="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="أدخل كلمة المرور"
                            required
                        />
                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={loading}
                            className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
                        </button>
                    </div>
                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            ليس لديك حساب؟{' '}
                            <button
                                onClick={() => onNavigate('register')}
                                className="text-red-600 hover:text-red-700 font-semibold"
                            >
                                أنشئ حساب جديد
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