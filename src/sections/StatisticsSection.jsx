// File: src/sections/StatisticsSection.jsx
import React from 'react';

const stats = [
  {
    id: 1,
    label: 'Clientes Activos',
    value: '850K+',
  },
  {
    id: 2,
    label: 'Cuentas Abiertas Este Año',
    value: '285K',
  },
  {
    id: 3,
    label: 'Préstamos Aprobados',
    value: '$3.2B',
  },
  {
    id: 4,
    label: 'Sucursales Nacionales',
    value: '120+',
  },
  {
    id: 5,
    label: 'Satisfacción del Cliente',
    value: '98%',
  },
  {
    id: 6,
    label: 'Años de Experiencia',
    value: '25+',
  },
];

export default function StatisticsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
          Nuestro Impacto en Números
        </h3>
        <div className="w-24 h-1 bg-blue-800 mx-auto mb-8"></div>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto text-lg">
          Cifras que demuestran por qué somos el banco de confianza para miles de familias
        </p>
        
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {stats.map(({ id, label, value }) => (
            <div
              key={id}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              <div className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent mb-3">
                {value}
              </div>
              <div className="text-sm lg:text-base font-medium text-gray-600 leading-tight">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}