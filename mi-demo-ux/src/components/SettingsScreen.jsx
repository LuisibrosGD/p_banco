import React from 'react';

export default function SettingsScreen({ onNavigate }) {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 p-6 transition-colors">
      <div className="flex items-center mb-8 mt-4">
        <button onClick={() => onNavigate('dashboard')} className="min-w-[48px] min-h-[48px] rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-bold flex items-center justify-center text-xl active:scale-95 transition-transform">
          ←
        </button>
        <h2 className="text-2xl font-bold ml-4 text-gray-900 dark:text-white">Configuración</h2>
      </div>
      <div className="flex-1 space-y-6 overflow-y-auto pb-4">
        <div className="p-2 rounded-3xl bg-gray-50 dark:bg-gray-800 transition-colors">
          <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
            <span className="font-semibold text-gray-900 dark:text-white">Notificaciones Push</span>
            <div className="w-12 h-7 bg-blue-500 rounded-full relative shadow-inner">
              <div className="w-5 h-5 bg-white rounded-full absolute right-1 top-1 shadow"></div>
            </div>
          </div>
        </div>
        <div className="p-5 rounded-3xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
        
          <h3 className="text-red-600 dark:text-red-500 font-bold mb-2 flex items-center">
            ⚠️ Zona Crítica
          </h3>
          
          <button className="w-full min-h-[48px] rounded-2xl font-bold bg-red-200 dark:bg-red-900/50 text-red-700 dark:text-red-400 active:scale-95 transition-transform">
            Eliminar Cuenta Bancaria
          </button>
        </div>
        
      </div>
      <div className="mt-auto mb-6">
        
        <button onClick={() => onNavigate('dashboard')} className="w-full min-h-[56px] rounded-2xl font-bold text-lg active:scale-95 transition-transform bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-xl">
          Guardar Cambios
        </button>
      </div>
    </div>
  );
}