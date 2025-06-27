import React from 'react';
import { X } from 'lucide-react';

export default function PrivacyBanner({ onClose }) {
  return (
    <div className="w-full bg-gray-100 border-b border-gray-200 text-sm py-3 px-4 flex justify-between items-center">
      <span className="text-gray-700">
        ¡Hola! Usamos <a href="#" className="underline text-blue-600 hover:text-blue-800">información de navegación</a> para mejorar tu experiencia dentro del sitio. Si seguís navegando o cerrás el mensaje, consideramos que estás aceptando.
      </span>
      <button 
        onClick={onClose} 
        className="ml-4 text-gray-500 hover:text-gray-700 text-xl leading-none"
        aria-label="Cerrar aviso de privacidad"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}