// File: src/sections/ProductsSection.jsx
import React from 'react';
import { PiggyBank, CreditCard, Home, TrendingUp } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Cuenta Marfil Premium',
    description: 'La cuenta que se adapta a tu estilo de vida premium',
    icon: <PiggyBank className="w-8 h-8 text-gray-700" />,
    features: [
      'Tasas de interés competitivas',
      'Sin comisiones de mantenimiento',
      'Acceso fácil vía app móvil',
      'Retiros gratuitos en cajeros mundiales',
    ],
  },
  {
    id: 2,
    name: 'Tarjeta Marfil Platinum',
    description: 'Más que una tarjeta, tu llave al mundo premium',
    icon: <CreditCard className="w-8 h-8 text-gray-700" />,
    features: [
      'Hasta 5% de cashback en compras',
      'Protección contra fraude sin responsabilidad',
      'Servicio al cliente prioritario 24/7',
      'Aceptación global sin restricciones',
    ],
  },
  {
    id: 3,
    name: 'Crédito Hipotecario Marfil',
    description: 'Tu hogar soñado, más cerca que nunca',
    icon: <Home className="w-8 h-8 text-gray-700" />,
    features: [
      'Tasas fijas preferenciales',
      'Plazos de pago flexibles hasta 30 años',
      'Sin penalización por pago anticipado',
      'Proceso de aprobación rápido',
    ],
  },
  {
    id: 4,
    name: 'Fondo de Inversión Marfil',
    description: 'Haz que tu dinero trabaje para ti',
    icon: <TrendingUp className="w-8 h-8 text-gray-700" />,
    features: [
      'Portafolio diversificado de inversiones',
      'Gestión profesional de activos',
      'Rentabilidad superior al mercado',
      'Transparencia total en movimientos',
    ],
  },
];

export default function ProductsSection() {
  return (
    <>
      <h3 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
        Nuestros Productos
      </h3>
      <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto text-lg">
        Productos financieros diseñados para maximizar el valor de tu dinero
      </p>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {products.map(({ id, name, description, icon, features }) => (
          <section
            key={id}
            aria-labelledby={`product-title-${id}`}
            className="group p-8 border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white flex flex-col hover:-translate-y-1"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gray-50 rounded-full mr-4 group-hover:bg-gray-100 transition-colors duration-300">
                {icon}
              </div>
              <div>
                <h4 id={`product-title-${id}`} className="text-2xl font-semibold text-gray-900 mb-1">
                  {name}
                </h4>
                <p className="text-gray-600 text-sm">{description}</p>
              </div>
            </div>
            
            <ul className="flex-grow space-y-3 text-gray-700 mb-8">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <button
              type="button"
              className="py-3 px-6 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-700 transition-colors duration-300 hover:scale-105"
            >
              Más información
            </button>
          </section>
        ))}
      </div>
    </>
  );
}