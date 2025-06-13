import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';
import FavoritesPage from './pages/FavoritesPage';
import ProfilePage from './pages/ProfilePage'; // Import ProfilePage

function AppRoutes() {
  const navigate = useNavigate();

  const handleNavigate = (page) => {
    if (page === 'login') navigate('/signin');
    else if (page === 'register') navigate('/signup');
    else if (page === 'landing') navigate('/');
    else if (page === 'dashboard') navigate('/dashboard');
    else if (page === 'favorites') navigate('/favorites');
    else if (page === 'profile') navigate('/profile'); // Handle profile navigation
    // add more navigation as needed
  };

  return (
    <Routes>
      <Route path="/" element={<LandingPage onNavigate={handleNavigate} />} />
      <Route path="/signin" element={<SignInPage onNavigate={handleNavigate} />} />
      <Route path="/signup" element={<SignUpPage onNavigate={handleNavigate} />} />
      <Route path="/dashboard" element={<DashboardPage onNavigate={handleNavigate} />} />
      <Route path="/favorites" element={<FavoritesPage onNavigate={handleNavigate} />} />
      <Route path="/profile" element={<ProfilePage onNavigate={handleNavigate} />} /> {/* Add ProfilePage route */}
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