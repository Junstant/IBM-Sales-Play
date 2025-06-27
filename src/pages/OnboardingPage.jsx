// File: src/pages/OnboardingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Banknote, Bot, CheckCircle, ArrowLeft } from 'lucide-react';

export default function OnboardingPage() {
  /*
    This is a placeholder onboarding page.
    Structured for future integration with AI onboarding assistant.
  */

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col items-center justify-center px-6 sm:px-10 py-20">
      <header className="mb-12 w-full max-w-2xl text-center">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <Banknote className="h-10 w-10 text-gray-700" />
          <h1 className="text-4xl font-extrabold text-gray-900">Banco Marfil</h1>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Bienvenido a tu Proceso de Onboarding
        </h2>
        <p className="text-gray-600 text-lg italic mb-2">
          Tu dinero vale mil
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Te guiaremos paso a paso para abrir tu cuenta y comenzar a disfrutar 
          de los mejores servicios financieros. Nuestro asistente de IA te ayudará 
          en todo el proceso.
        </p>
      </header>

      <section
        aria-label="AI assistant onboarding placeholder"
        className="w-full max-w-2xl bg-white border border-gray-200 rounded-xl p-10 shadow-xl mb-8"
      >
        <div className="flex flex-col items-center justify-center text-center">
          <div className="p-6 bg-gray-100 rounded-full mb-8">
            <Bot className="w-16 h-16 text-gray-700" />
          </div>
          
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Asistente de IA en Desarrollo
          </h3>
          
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Estamos trabajando en un asistente inteligente que te ayudará a completar 
            tu registro de manera rápida y segura. Mientras tanto, puedes explorar 
            nuestros servicios.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-500 mb-2" />
              <span className="text-sm font-medium text-gray-700">Proceso Seguro</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-500 mb-2" />
              <span className="text-sm font-medium text-gray-700">Rápido y Fácil</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-500 mb-2" />
              <span className="text-sm font-medium text-gray-700">Soporte 24/7</span>
            </div>
          </div>

          <div className="w-full p-6 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg border-2 border-dashed border-gray-300">
            <p className="text-gray-500 font-medium text-center">
              🤖 El asistente de IA aparecerá aquí próximamente
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-gray-700 border-2 border-gray-300 font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver al Inicio
        </Link>
        
        <button
          disabled
          className="px-6 py-3 rounded-lg bg-gray-300 text-gray-500 font-semibold cursor-not-allowed"
        >
          Continuar con Onboarding (Próximamente)
        </button>
      </div>

      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>
          ¿Necesitas ayuda? Contacta nuestro equipo de soporte 24/7
        </p>
        <p className="mt-1">
          📞 +1 (555) 123-4567 | 📧 soporte@bancomarfil.com
        </p>
      </footer>
    </div>
  );
}