import React, { useState, useEffect } from 'react';
import LoginScreen from './components/LoginScreen';
import DashboardScreen from './components/DashboardScreen';
import TransferScreen from './components/TransferScreen';
import SettingsScreen from './components/SettingsScreen';
import SidebarMenu from './components/SidebarMenu';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('login');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Lógica global del Modo Oscuro
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-950 flex items-center justify-center p-4 font-sans transition-colors duration-300">
      <div className="relative w-full max-w-[393px] h-[852px] bg-white dark:bg-gray-900 rounded-[3rem] shadow-2xl overflow-hidden border-[8px] border-gray-800 flex flex-col transition-colors duration-300">
        
        {currentScreen === 'login' && <LoginScreen onNavigate={setCurrentScreen} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />}
        {currentScreen === 'dashboard' && <DashboardScreen onNavigate={setCurrentScreen} toggleTheme={toggleTheme} isDarkMode={isDarkMode} onOpenMenu={() => setIsSidebarOpen(true)} />}
        {currentScreen === 'transfer' && <TransferScreen onNavigate={setCurrentScreen} />}
        {currentScreen === 'settings' && <SettingsScreen onNavigate={setCurrentScreen} />}

        <SidebarMenu isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} onNavigate={setCurrentScreen} />
        
      </div>
    </div>
  );
}