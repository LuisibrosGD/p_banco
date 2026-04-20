import React from 'react';

export default function SidebarMenu({ isOpen, onClose, onNavigate }) {
  if (!isOpen) return null;

  const handleNavigation = (screen) => {
    onClose();
    onNavigate(screen);
  };

  return (
    <div className="absolute inset-0 z-50 flex">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="relative w-3/4 h-full bg-white dark:bg-gray-900 shadow-2xl flex flex-col animate-slide-right transition-colors">
        <div className="p-6 border-b border-gray-100 dark:border-gray-800">
          <button onClick={onClose} className="min-w-[48px] min-h-[48px] text-2xl text-gray-900 dark:text-white mb-4">✕</button>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">LJ</div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">Luis Junior</h3>
              <p className="text-sm text-gray-500">Mi Perfil</p>
            </div>
          </div>
        </div>
        <div className="flex-1 p-4 space-y-2">
          <button onClick={() => handleNavigation('settings')} className="w-full min-h-[56px] flex items-center px-4 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white font-medium transition-colors">
            <span className="text-xl mr-4">⚙️</span> Configuración
          </button>
          <button className="w-full min-h-[56px] flex items-center px-4 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white font-medium transition-colors">
            <span className="text-xl mr-4">💳</span> Mis Tarjetas
          </button>
          <button className="w-full min-h-[56px] flex items-center px-4 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white font-medium transition-colors">
            <span className="text-xl mr-4">❓</span> Centro de Ayuda
          </button>
        </div>
        <div className="p-4 border-t border-gray-100 dark:border-gray-800">
          <button onClick={() => handleNavigation('login')} className="w-full min-h-[56px] flex items-center px-4 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-2xl font-bold transition-colors">
            <span className="text-xl mr-4">🚪</span> Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
}