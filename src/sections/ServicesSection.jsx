// File: src/sections/ServicesSection.jsx
import React from 'react';
import { User, TrendingUp, Building2, Smartphone, CreditCard, PiggyBank } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Banca Personal',
    description:
      'Gestiona tus finanzas diarias con cuentas corrientes, tarjetas de débito y crédito personalizadas para tu estilo de vida.',
    icon: <User className="w-12 h-12 text-gray-700" />,
  },
  {
    id: 2,
    title: 'Gestión de Patrimonio',
    description:
      'Asesoría experta y planes de inversión personalizados para hacer crecer y proteger tus activos a largo plazo.',
    icon: <TrendingUp className="w-12 h-12 text-gray-700" />,
  },
  {
    id: 3,
    title: 'Banca Empresarial',
    description:
      'Soluciones financieras especializadas para empresas: créditos, servicios de comercio exterior y gestión de tesorería.',
    icon: <Building2 className="w-12 h-12 text-gray-700" />,
  },
  {
    id: 4,
    title: 'Banca Digital',
    description:
      'Accede a todos nuestros servicios desde tu móvil con la aplicación más segura y fácil de usar del mercado.',
    icon: <Smartphone className="w-12 h-12 text-gray-700" />,
  },
  {
    id: 5,
    title: 'Tarjetas Premium',
    description:
      'Tarjetas de crédito con beneficios exclusivos, cashback y acceso a salas VIP en aeropuertos internacionales.',
    icon: <CreditCard className="w-12 h-12 text-gray-700" />,
  },
  {
    id: 6,
    title: 'Ahorro e Inversión',
    description:
      'Cuentas de ahorro con tasas competitivas y fondos de inversión diversificados para hacer crecer tu dinero.',
    icon: <PiggyBank className="w-12 h-12 text-gray-700" />,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
          Nuestros Servicios
        </h3>
        <div className="w-24 h-1 bg-blue-800 mx-auto mb-8"></div>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto text-lg">
          Soluciones financieras integrales diseñadas para cada etapa de tu vida
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ id, title, description, icon }) => (
            <article
              key={id}
              className="group flex flex-col items-center bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              <div className="mb-6 p-4 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300">
                {React.cloneElement(icon, { className: "w-12 h-12 text-blue-800" })}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">{title}</h4>
              <p className="text-gray-600 text-center leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}