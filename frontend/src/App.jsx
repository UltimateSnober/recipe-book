import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

function AppRoutes() {
  const navigate = useNavigate();

  // Map navigation keys to routes
  const handleNavigate = (page) => {
    if (page === 'login') navigate('/signin');
    else if (page === 'register') navigate('/signup');
    else if (page === 'landing') navigate('/');
    else if (page === 'dashboard') alert('تم تسجيل الدخول بنجاح!'); // Replace with dashboard route if you have one
  };

  return (
    <Routes>
      <Route path="/" element={<LandingPage onNavigate={handleNavigate} />} />
      <Route path="/signin" element={<SignInPage onNavigate={handleNavigate} />} />
      <Route path="/signup" element={<SignUpPage onNavigate={handleNavigate} />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}