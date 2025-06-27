// File: src/sections/BenefitsSection.jsx
import React from 'react';
import { Clock, DollarSign, Shield, Banknote } from 'lucide-react';

const benefits = [
  {
    id: 1,
    title: 'Atención 24/7',
    description: 'Nuestro equipo de soporte especializado está disponible las 24 horas para asistirte.',
    icon: <Clock className="w-8 h-8 text-gray-700" />,
  },
  {
    id: 2,
    title: 'Sin Comisiones Ocultas',
    description: 'Creemos en la transparencia total. Sin sorpresas, sin costos escondidos.',
    icon: <DollarSign className="w-8 h-8 text-gray-700" />,
  },
  {
    id: 3,
    title: 'Seguridad Avanzada',
    description: 'Tus datos y dinero están protegidos por protocolos de seguridad líderes en la industria.',
    icon: <Shield className="w-8 h-8 text-gray-700" />,
  },
  {
    id: 4,
    title: 'Créditos Flexibles',
    description: 'Opciones de préstamos personalizadas para tus necesidades personales y empresariales.',
    icon: <Banknote className="w-8 h-8 text-gray-700" />,
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
          ¿Por qué elegir Banco Marfil?
        </h3>
        <div className="w-24 h-1 bg-blue-800 mx-auto mb-8"></div>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto text-lg">
          Beneficios únicos que marcan la diferencia en tu experiencia bancaria
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map(({ id, title, description, icon }) => (
            <div
              key={id}
              className="group flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              <div className="p-4 bg-blue-50 rounded-full mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                {React.cloneElement(icon, { className: "w-8 h-8 text-blue-800" })}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{title}</h4>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}