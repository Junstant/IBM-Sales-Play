// File: src/sections/HeroSection.jsx
import React from 'react';
import { ArrowRight, Shield, TrendingUp, CreditCard } from 'lucide-react';

export default function HeroSection({ onLoginClick, onRegisterClick }) {
  return (
    <section
      aria-label="Hero section with bank introduction and call to action"
      className="pt-16 pb-24 flex flex-col items-center text-center max-w-5xl mx-auto"
    >
      <div className="mb-8">
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
          Banco <span className="text-gray-700">Marfil</span>
        </h2>
        <div className="text-2xl md:text-3xl font-bold text-gray-600 mb-8 italic">
          Tu dinero vale mil
        </div>
      </div>
      
      <p className="text-gray-700 max-w-4xl text-lg sm:text-xl mb-12 leading-relaxed">
        Descubre una nueva forma de manejar tus finanzas. Con tecnología de vanguardia, 
        seguridad premium y atención personalizada, te ofrecemos las mejores soluciones 
        bancarias para hacer crecer tu patrimonio.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 mb-16">
        <button
          onClick={onRegisterClick}
          className="group px-8 py-4 rounded-lg bg-gray-800 text-white font-bold text-lg hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
          aria-label="Registrarse y comenzar tu experiencia bancaria"
        >
          Abrir cuenta
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <button
          onClick={onLoginClick}
          className="px-8 py-4 rounded-lg border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-bold text-lg transition-all duration-300 hover:scale-105"
        >
          Iniciar sesión
        </button>
      </div>

      {/* Feature highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
        <div className="flex flex-col items-center text-center p-6 bg-white/50 rounded-lg border border-gray-200 backdrop-blur-sm">
          <div className="p-3 bg-gray-100 rounded-full mb-4">
            <Shield className="w-8 h-8 text-gray-700" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Máxima Seguridad</h3>
          <p className="text-gray-600 text-sm">Protección bancaria de nivel mundial para tus fondos</p>
        </div>
        
        <div className="flex flex-col items-center text-center p-6 bg-white/50 rounded-lg border border-gray-200 backdrop-blur-sm">
          <div className="p-3 bg-gray-100 rounded-full mb-4">
            <TrendingUp className="w-8 h-8 text-gray-700" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Crecimiento</h3>
          <p className="text-gray-600 text-sm">Inversiones inteligentes que multiplican tu capital</p>
        </div>
        
        <div className="flex flex-col items-center text-center p-6 bg-white/50 rounded-lg border border-gray-200 backdrop-blur-sm">
          <div className="p-3 bg-gray-100 rounded-full mb-4">
            <CreditCard className="w-8 h-8 text-gray-700" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Sin Comisiones</h3>
          <p className="text-gray-600 text-sm">Productos bancarios transparentes y sin sorpresas</p>
        </div>
      </div>
    </section>
  );
}