// File: src/pages/LandingPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Banknote, Menu, X } from 'lucide-react';
import HeroSection from '../sections/HeroSection';
import ServicesSection from '../sections/ServicesSection';
import BenefitsSection from '../sections/BenefitsSection';
import ProductsSection from '../sections/ProductsSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import StatisticsSection from '../sections/StatisticsSection';

export default function LandingPage() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const onLoginClick = () => {
    navigate('/login');
  };

  const onRegisterClick = () => {
    navigate('/register');
  };

  return (
    <main className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 select-none">
      <header className="flex items-center justify-between py-6 border-b border-gray-300">
        <div className="flex items-center space-x-2">
          <Banknote className="h-8 w-8 text-gray-700" />
          <h1 className="text-3xl font-bold tracking-tight text-gray-800">Banco Marfil</h1>
        </div>
        
        <nav aria-label="Primary" className="space-x-8 hidden md:flex text-gray-700 font-medium">
          <a href="#services" className="hover:text-gray-900 transition-colors duration-300">Servicios</a>
          <a href="#products" className="hover:text-gray-900 transition-colors duration-300">Productos</a>
          <a href="#benefits" className="hover:text-gray-900 transition-colors duration-300">Beneficios</a>
          <a href="#testimonials" className="hover:text-gray-900 transition-colors duration-300">Testimonios</a>
          <a href="#statistics" className="hover:text-gray-900 transition-colors duration-300">Estadísticas</a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={onLoginClick}
            className="px-4 py-2 text-gray-700 font-medium hover:text-gray-900 transition-colors duration-300"
            aria-label="Iniciar sesión en Banco Marfil"
          >
            Iniciar Sesión
          </button>
          <button
            onClick={onRegisterClick}
            className="px-5 py-2 rounded-md bg-gray-800 text-white font-semibold hover:bg-gray-700 transition-colors duration-300"
            aria-label="Registrarse en Banco Marfil"
          >
            Registrarse
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          aria-label="Abrir menú de navegación"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-300 py-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-4 text-gray-700">
            <a href="#services" className="px-4 py-2 hover:bg-gray-100 transition-colors">Servicios</a>
            <a href="#products" className="px-4 py-2 hover:bg-gray-100 transition-colors">Productos</a>
            <a href="#benefits" className="px-4 py-2 hover:bg-gray-100 transition-colors">Beneficios</a>
            <a href="#testimonials" className="px-4 py-2 hover:bg-gray-100 transition-colors">Testimonios</a>
            <a href="#statistics" className="px-4 py-2 hover:bg-gray-100 transition-colors">Estadísticas</a>
            <div className="px-4 pt-4 border-t border-gray-200 space-y-2">
              <button
                onClick={onLoginClick}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Iniciar Sesión
              </button>
              <button
                onClick={onRegisterClick}
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white font-semibold hover:bg-gray-700 transition-colors"
              >
                Registrarse
              </button>
            </div>
          </nav>
        </div>
      )}

      <HeroSection onLoginClick={onLoginClick} onRegisterClick={onRegisterClick} />

      <section id="services" className="mt-20">
        <ServicesSection />
      </section>

      <section id="products" className="mt-20">
        <ProductsSection />
      </section>

      <section id="benefits" className="mt-20">
        <BenefitsSection />
      </section>

      <section id="statistics" className="mt-20">
        <StatisticsSection />
      </section>

      <section id="testimonials" className="mt-20 mb-24">
        <TestimonialsSection />
      </section>

      <footer className="border-t border-gray-300 py-8 text-center text-gray-600 text-sm select-text">
        <p>&copy; 2024 Banco Marfil. Todos los derechos reservados.</p>
        <p className="mt-2 text-gray-500 italic">Tu dinero vale mil</p>
      </footer>
    </main>
  );
}