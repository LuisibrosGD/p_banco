import React, { useState } from 'react';

export default function DashboardScreen({ onNavigate, toggleTheme, isDarkMode, onOpenMenu }) {
  // Nuevo estado para controlar la visibilidad del saldo (oculto por defecto)
  const [isBalanceVisible, setIsBalanceVisible] = useState(false);

  const transacciones = [
    { title: 'Supermercado', amount: '- S/ 120.50', date: 'Hoy, 10:30 AM', type: 'out', icon: '🛒' },
    { title: 'Sueldo Mensual', amount: '+ S/ 2,500.00', date: 'Ayer, 15:45 PM', type: 'in', icon: '💰' },
    { title: 'Pago de Luz', amount: '- S/ 65.00', date: '18 Abr', type: 'out', icon: '⚡' },
    { title: 'Suscripción Netflix', amount: '- S/ 35.90', date: '17 Abr', type: 'out', icon: '🎬' },
    { title: 'Transferencia', amount: '- S/ 150.00', date: '15 Abr', type: 'out', icon: '💸' },
    { title: 'Reembolso', amount: '+ S/ 85.50', date: '12 Abr', type: 'in', icon: '📦' },
    { title: 'Gasolina', amount: '- S/ 80.00', date: '08 Abr', type: 'out', icon: '⛽' },
  ];

  return (
    <div className="flex flex-col h-full relative bg-gray-50 dark:bg-gray-950 transition-colors">
      <div className="flex-1 p-6 overflow-y-auto pb-32 scrollbar-hide">
        <div className="flex justify-between items-center mb-8 mt-4">
          <button onClick={onOpenMenu} className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full text-2xl font-bold bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            ☰
          </button>
          <button onClick={toggleTheme} className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full text-xl shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors">
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Sección del Saldo con Toggle de Visibilidad */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-1">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Saldo Total Disponible</p>
            
            {/* Botón con el ícono del ojo para alternar visibilidad (Objetivo de toque mínimo 44x44) */}
            <button 
              onClick={() => setIsBalanceVisible(!isBalanceVisible)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors rounded-full active:scale-90"
              aria-label={isBalanceVisible ? "Ocultar saldo" : "Mostrar saldo"}
            >
              {isBalanceVisible ? (
                // Ícono de Ojo Abierto
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              ) : (
                // Ícono de Ojo Cerrado (Tachado)
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Renderizado condicional del saldo */}
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {isBalanceVisible ? 'S/ 4,500.00' : '••••••••'}
          </h2>
        </div>

        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Movimientos Recientes</h3>
        <div className="space-y-4">
          {transacciones.map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center text-2xl">{item.icon}</div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{item.title}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
                </div>
              </div>
              <p className={`font-bold ${item.type === 'in' ? 'text-green-500' : 'text-gray-900 dark:text-white'}`}>
                {item.amount}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-6 py-4 flex justify-between items-center pb-8 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] rounded-b-[2.5rem] transition-colors">
        <button className="flex flex-col items-center min-w-[64px] min-h-[48px] text-blue-600 dark:text-blue-400">
          <span className="text-2xl mb-1">🏠</span>
          <span className="text-[11px] font-bold">Inicio</span>
        </button>
        <button onClick={() => onNavigate('transfer')} className="w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center text-3xl shadow-xl shadow-blue-600/30 -mt-8 active:scale-95 transition-transform">
          +
        </button>
        <button className="flex flex-col items-center min-w-[64px] min-h-[48px] text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
          <span className="text-2xl mb-1">💰</span>
          <span className="text-[11px] font-bold">Retirar</span>
        </button>
      </div>
    </div>
  );
}