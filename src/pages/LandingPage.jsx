// File: src/pages/LandingPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Banknote, Menu, X, Search, Percent, User, HandCoins, CreditCard, Smartphone, Shield } from "lucide-react";
import HeroCarousel from "../components/HeroCarousel";
import QuickActions from "../components/QuickActions";
import BenefitsSection from "../sections/BenefitsSection";
import ProductsSection from "../sections/ProductsSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import StatisticsSection from "../sections/StatisticsSection";
import AppDownloadSection from "../sections/AppDownloadSection";
import InvestmentSection from "../sections/InvestmentSection";
import ContactSection from "../sections/ContactSection";
import HelpSection from "../sections/HelpSection";
import Footer from "../components/Footer";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

// Importar imágenes de assets
import bgPromos from "../assets/bg-promos.png";
import logo from "../assets/logo.png";
import buuble4 from "../assets/bubble4.png";

export default function LandingPage() {
  useDocumentTitle("Inicio");
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showPrivacyBanner, setShowPrivacyBanner] = React.useState(true);

  const onLoginClick = () => {
    navigate("/login");
  };

  const onRegisterClick = () => {
    navigate("/register");
  };

  // Variantes de animación para el header
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6,
      },
    },
  };

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        type: "spring",
        stiffness: 100,
      },
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1 + 0.5,
        type: "spring",
        stiffness: 150,
      },
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  const bannerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      y: -50,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const promoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const floatingVariants = {
    floating: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Privacy Banner with animation */}
      <AnimatePresence>
        {showPrivacyBanner && (
          <motion.div className="bg-gray-50 border-b border-gray-200 text-sm py-3 px-4 flex justify-between items-center" variants={bannerVariants} initial="hidden" animate="visible" exit="exit">
            <motion.span className="text-gray-700" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              ¡Hola! Usamos{" "}
              <motion.a href="#" className="underline text-red-600 hover:text-red-800" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                información de navegación
              </motion.a>{" "}
              para mejorar tu experiencia dentro del sitio. Si seguís navegando o cerrás el mensaje, consideramos que estás aceptando.
            </motion.span>
            <motion.button
              onClick={() => setShowPrivacyBanner(false)}
              className="ml-4 text-gray-500 hover:text-gray-700 text-xl leading-none"
              aria-label="Cerrar aviso de privacidad"
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              ×
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header with complex animations */}
      <motion.header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm" variants={headerVariants} initial="hidden" animate="visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo with animation */}
            <motion.div className="flex items-center space-x-3" variants={logoVariants} initial="hidden" animate="visible" whileHover="hover">
              <motion.img src={logo} alt="Banco Marfil" className="h-8 w-8" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} />
              <div className="flex flex-col">
                <motion.h1 className="text-xl font-bold text-black leading-none" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                  Banco Marfil
                </motion.h1>
                <motion.span className="text-xs text-gray-600 leading-none" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                  Tu dinero vale mil
                </motion.span>
              </div>
            </motion.div>

            {/* Desktop Navigation with staggered animation */}
            <nav className="hidden md:flex items-center space-x-8">
              {["Personas", "Empresas", "Ayuda"].map((item, i) => (
                <motion.button
                  key={item}
                  className="text-black hover:text-red-600 font-medium transition-colors"
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  custom={i}
                >
                  {item}
                </motion.button>
              ))}
            </nav>

            {/* Desktop Buttons with animation */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.button
                onClick={onLoginClick}
                className="px-4 py-2 text-black font-medium hover:text-red-600 border border-black rounded transition-colors hover:border-red-600"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                custom={0}
              >
                Ingresar
              </motion.button>
              <motion.button
                onClick={onRegisterClick}
                className="px-4 py-2 bg-red-600 text-white font-medium hover:bg-red-700 rounded transition-colors relative overflow-hidden"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                custom={1}
              >
                <motion.span className="relative z-10">Registrarme</motion.span>
                <motion.div className="absolute inset-0 bg-red-700" initial={{ x: "-100%" }} whileHover={{ x: "0%" }} transition={{ duration: 0.3 }} />
              </motion.button>
              <motion.button
                className="p-2 text-black hover:text-red-600 transition-colors"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap="tap"
                custom={2}
              >
                <Search className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Mobile menu button with animation */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-black hover:text-red-600 hover:bg-gray-50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile menu with animation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="md:hidden bg-white border-t border-gray-200 py-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <nav className="flex flex-col space-y-4">
                  {["Personas", "Empresas", "Ayuda"].map((item, i) => (
                    <motion.button
                      key={item}
                      className="text-left px-4 py-2 text-black hover:bg-gray-50 hover:text-red-600 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      {item}
                    </motion.button>
                  ))}
                  <motion.div className="px-4 pt-4 border-t border-gray-200 space-y-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                    <motion.button onClick={onLoginClick} className="w-full text-left px-4 py-2 text-black hover:bg-gray-50 hover:text-red-600 transition-colors" whileHover={{ x: 10 }}>
                      Office Banking
                    </motion.button>
                    <motion.button
                      onClick={onRegisterClick}
                      className="w-full px-4 py-2 bg-red-600 text-white font-medium hover:bg-red-700 rounded transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Online Banking
                    </motion.button>
                  </motion.div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      <main>
        {/* Hero Carousel with animation wrapper */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <HeroCarousel onLoginClick={onLoginClick} onRegisterClick={onRegisterClick} />
        </motion.div>

        {/* Quick Actions with animation */}
        <motion.section className="py-8 bg-gray-50" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, threshold: 0.3 }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <QuickActions />
          </div>
        </motion.section>

        {/* Promotions Section with complex animations */}
        <motion.section className="w-full flex items-center justify-center" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, threshold: 0.3 }}>
          <motion.div
            className="py-16 text-white relative overflow-hidden w-1/2 rounded-lg"
            style={{
              backgroundImage: `url(${bgPromos})`,
              backgroundRepeat: "repeat-x",
              backgroundSize: "auto 100%",
            }}
            variants={promoVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div className="absolute inset-0 bg-red-900/30" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                  <motion.div
                    className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 0.2,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 10,
                      boxShadow: "0 10px 25px rgba(220, 38, 38, 0.4)",
                    }}
                  >
                    <Smartphone className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.h2 className="text-3xl lg:text-4xl font-bold mb-4" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                    ¿Venís de otro banco?
                  </motion.h2>
                  <motion.p className="text-xl mb-6 text-white" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                    Te contamos lo que tenés que saber para cambiarte.
                  </motion.p>
                  <motion.button
                    className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">Conocer más</span>
                    <motion.div className="absolute inset-0 bg-red-700" initial={{ x: "-100%" }} whileHover={{ x: "0%" }} transition={{ duration: 0.3 }} />
                  </motion.button>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <motion.div
                    className="w-96 h-56 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm"
                    variants={floatingVariants}
                    animate="floating"
                    whileHover={{
                      scale: 1.05,
                      rotate: 5,
                    }}
                  >
                    <motion.img
                      src={buuble4}
                      alt="Promociones"
                      className="w-96"
                      loading="lazy"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Benefits Section with animation wrapper */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, threshold: 0.2 }} transition={{ duration: 0.8 }}>
          <BenefitsSection />
        </motion.div>

        {/* Products Section with animation wrapper */}
        <motion.section className="py-16 bg-white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, threshold: 0.2 }} transition={{ duration: 0.8 }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProductsSection />
          </div>
        </motion.section>

        {/* Statistics Section with animation wrapper */}
        <motion.section className="py-16 bg-gray-50" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, threshold: 0.2 }} transition={{ duration: 0.8 }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StatisticsSection />
          </div>
        </motion.section>

        {/* Testimonials Section with animation wrapper */}
        <motion.section className="py-16 bg-white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, threshold: 0.2 }} transition={{ duration: 0.8 }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TestimonialsSection />
          </div>
        </motion.section>

        {/* App Download Section */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, threshold: 0.2 }} transition={{ duration: 0.8 }}>
          <AppDownloadSection onRegisterClick={onRegisterClick} />
        </motion.div>

        {/* Investment Section */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, threshold: 0.2 }} transition={{ duration: 0.8 }}>
          <InvestmentSection />
        </motion.div>

        {/* Contact Section */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, threshold: 0.2 }} transition={{ duration: 0.8 }}>
          <ContactSection />
        </motion.div>

        {/* Help Section */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, threshold: 0.2 }} transition={{ duration: 0.8 }}>
          <HelpSection />
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
