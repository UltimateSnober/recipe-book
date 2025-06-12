import { useNavigate } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import SampleRecipesSection from '../components/SampleRecipesSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function LandingPage() {
    const navigate = useNavigate();

    const handleNavigate = (page) => {
        if (page === 'login') navigate('/signin');
        else if (page === 'register') navigate('/signup');
        else if (page === 'landing') navigate('/');
        else alert(`سيتم التوجه إلى صفحة: ${page}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50" dir="rtl">
            <NavigationBar onNavigate={handleNavigate} />
            <HeroSection onNavigate={handleNavigate} />
            <FeaturesSection />
            <SampleRecipesSection />
            <CTASection onNavigate={handleNavigate} />
            <Footer />
        </div>
    );
}