import React from 'react';
import { Percent, User, HandCoins, CreditCard, Smartphone, Shield } from 'lucide-react';

const actions = [
  { icon: <Percent className="w-8 h-8" />, label: "Buscar promociones", href: "#" },
  { icon: <User className="w-8 h-8" />, label: "Ir a cuentas Marfil", href: "#" },
  { icon: <HandCoins className="w-8 h-8" />, label: "Pedir un préstamo", href: "#" },
  { icon: <CreditCard className="w-8 h-8" />, label: "Conocer tarjetas", href: "#" },
  { icon: <Smartphone className="w-8 h-8" />, label: "Descubrir inversiones", href: "#" },
  { icon: <Shield className="w-8 h-8" />, label: "Sacar un seguro", href: "#" },
];

export default function QuickActions() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {actions.map((action, index) => (
        <a
          key={index}
          href={action.href}
          className="flex flex-col items-center justify-center p-6 bg-white hover:bg-red-50 rounded-xl transition-colors group border border-gray-200 shadow-sm hover:shadow-md hover:border-red-200"
        >
          <div className="text-black mb-3 group-hover:scale-110 group-hover:text-red-600 transition-all">
            {action.icon}
          </div>
          <span className="text-sm font-medium text-black text-center leading-tight group-hover:text-red-600 transition-colors">
            {action.label}
          </span>
        </a>
      ))}
    </div>
  );
}