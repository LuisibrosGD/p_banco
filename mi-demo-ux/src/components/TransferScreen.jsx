import React from 'react';

export default function TransferScreen({ onNavigate }) {
  return (
    <div className="flex flex-col h-full p-6 bg-white dark:bg-gray-900 transition-colors">
      <div className="flex items-center mb-8 mt-4">
        <button onClick={() => onNavigate('dashboard')} className="min-w-[48px] min-h-[48px] rounded-full flex items-center justify-center text-xl font-bold active:scale-95 transition-transform bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
          ←
        </button>
        <h2 className="text-2xl font-bold ml-4 text-gray-900 dark:text-white">Nueva Operación</h2>
      </div>
      <div className="space-y-6 flex-1">
        <div className="p-6 rounded-3xl bg-gray-50 dark:bg-gray-800 transition-colors">
          <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Monto a transferir</label>
          <div className="flex items-center text-5xl font-bold mt-2 text-gray-900 dark:text-white">
            <span>S/</span>
            <input type="number" placeholder="0.00" className="w-full bg-transparent outline-none ml-2 text-gray-900 dark:text-white placeholder-gray-300 dark:placeholder-gray-600" />
          </div>
        </div>
        <button className="w-full min-h-[80px] border-2 border-dashed rounded-3xl flex items-center justify-center space-x-3 active:scale-95 transition-all bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400">
          <span className="text-2xl">📷</span>
          <span className="font-semibold text-lg">Escanear código QR</span>
        </button>
      </div>
      <div className="mt-auto mb-6">
        <button onClick={() => onNavigate('dashboard')} className="w-full min-h-[56px] rounded-2xl font-bold text-lg active:scale-95 transition-transform shadow-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900">
          Confirmar Transferencia
        </button>
      </div>
    </div>
  );
}