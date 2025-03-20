import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SplashScreen } from './components/SplashScreen';
import { FirstPage } from './pages/FirstPage';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import { HealthScreening } from './pages/HealthScreening';
import { GpsTracking } from './pages/GpsTracking';
import { ServiceAppointment } from './pages/ServiceAppointment';
import { MediaLibrary } from './pages/MediaLibrary';
import { ChatPage } from './pages/ChatPage';
import { ProfilePage } from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/first" element={<FirstPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/health-screening" element={<HealthScreening />} />
        <Route path="/gps-tracking" element={<GpsTracking />} />
        <Route path="/appointments" element={<ServiceAppointment />} />
        <Route path="/media" element={<MediaLibrary />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/profile" element={<ProfilePage />} /> 
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;