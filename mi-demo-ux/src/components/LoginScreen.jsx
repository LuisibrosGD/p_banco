import React, { useState } from 'react';

export default function LoginScreen({ onNavigate, toggleTheme, isDarkMode }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onNavigate('dashboard');
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full p-6 bg-white dark:bg-gray-900 transition-colors">
      <div className="flex justify-end mt-4">
        <button onClick={toggleTheme} className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full text-xl shadow-sm transition-all bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-4xl font-extrabold mb-2 tracking-tight text-gray-900 dark:text-white">Bienvenido</h1>
        <p className="text-lg mb-8 text-gray-500 dark:text-gray-400">Ingresa a tu banca móvil</p>
        <input type="text" placeholder="Número de DNI" className="w-full min-h-[56px] px-4 rounded-2xl border mb-4 focus:ring-2 focus:ring-blue-500 outline-none text-lg transition-all bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white" />
      </div>
      <div className="mt-auto mb-6 space-y-4">
        <button onClick={handleLogin} disabled={isLoading} className="w-full min-h-[56px] bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold flex items-center justify-center space-x-2 active:scale-95 transition-all text-lg">
          {isLoading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Autenticando...</span>
            </>
          ) : (
            <span>Ingresar de forma segura</span>
          )}
        </button>
        <button className="w-full min-h-[56px] rounded-2xl font-semibold flex items-center justify-center space-x-2 active:scale-95 transition-all text-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
          <span>📱</span>
          <span>Ingresar con FaceID</span>
        </button>
      </div>
    </div>
  );
}