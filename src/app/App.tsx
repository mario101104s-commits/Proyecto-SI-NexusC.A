import { useState } from 'react';
import { LoginPage } from '@/app/components/LoginPage';
import { Dashboard } from '@/app/components/Dashboard';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState('');

  const handleLogin = (username: string) => {
    setCurrentUser(username);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser('');
  };

  if (!isAuthenticated) {
    return <LoginPage onLoginSuccess={handleLogin} />;
  }

  return <Dashboard username={currentUser} onLogout={handleLogout} />;
}
