// File: src/pages/OnboardingPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Banknote, Bot, CheckCircle, ArrowLeft, Shield, Zap, Users, Clock, Sparkles } from "lucide-react";
import logo from "../assets/logo.png";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function OnboardingPage() {
  useDocumentTitle("Bienvenido");
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simular progreso de carga
    const timer = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : prev));
    }, 50);

    setTimeout(() => {
      clearInterval(timer);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleStartOnboarding = () => {
    setIsLoading(true);
    // Aquí iría la lógica del onboarding
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const botVariants = {
    idle: {
      scale: 1,
      rotate: 0,
    },
    active: {
      scale: [1, 1.1, 1],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const features = [
    {
      icon: Shield,
      title: "Proceso Seguro",
      description: "Máxima seguridad en cada paso",
      color: "green",
    },
    {
      icon: Zap,
      title: "Rápido y Fácil",
      description: "Solo 5 minutos para completar",
      color: "yellow",
    },
    {
      icon: Users,
      title: "Soporte 24/7",
      description: "Te ayudamos cuando lo necesites",
      color: "blue",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-300 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
      </div>

      <motion.div className="w-full max-w-4xl space-y-8 relative z-20" variants={containerVariants} initial="hidden" animate="visible">
        {/* Header */}
        <motion.header className="text-center relative z-30" variants={itemVariants}>
          <motion.div variants={logoVariants} whileHover={{ scale: 1.05, rotate: 5 }} className="inline-flex items-center space-x-3 mb-6 cursor-pointer relative z-40">
            <div className="relative">
              <motion.img src={logo} alt="Banco Marfil" className="h-16 w-16" animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
              <motion.div className="absolute inset-0 bg-red-600 rounded-full opacity-20 pointer-events-none" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-gray-900">Banco Marfil</span>
              <span className="text-lg text-red-600 font-medium">Tu dinero vale mil</span>
            </div>
          </motion.div>

          <motion.h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4" variants={itemVariants}>
            ¡Bienvenido! 🎉
          </motion.h2>
          <motion.p className="text-xl text-gray-600 mb-6" variants={itemVariants}>
            Estás a un paso de revolucionar tu experiencia financiera
          </motion.p>

          {/* Progress Bar */}
          <motion.div className="w-full max-w-md mx-auto mb-8" variants={itemVariants}>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Preparando tu experiencia</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <motion.div className="h-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full" initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.5 }} />
            </div>
          </motion.div>
        </motion.header>

        {/* Main Card */}
        <motion.section
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/50 relative overflow-hidden z-30"
          variants={itemVariants}
          whileHover={{
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            transition: { duration: 0.3 },
          }}
        >
          {/* Card Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent pointer-events-none"></div>

          <div className="relative z-40">
            {/* AI Assistant Section */}
            <div className="text-center mb-12">
              <motion.div className="relative inline-block mb-8" variants={botVariants} animate={progress === 100 ? "active" : "idle"}>
                <div className="p-8 bg-gradient-to-br from-red-100 to-red-200 rounded-full relative">
                  <Bot className="w-20 h-20 text-red-600" />

                  {/* Floating particles */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute -bottom-1 -left-1 w-3 h-3 bg-red-400 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />

                  {/* Sparkles */}
                  <motion.div className="absolute top-4 left-4" animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                    <Sparkles className="w-6 h-6 text-yellow-500" />
                  </motion.div>
                </div>

                {/* Pulse ring */}
                <motion.div className="absolute inset-0 border-4 border-red-300 rounded-full" animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
              </motion.div>

              <motion.h3 className="text-3xl font-bold text-gray-900 mb-4" variants={itemVariants}>
                Tu Asistente Personal está Listo
              </motion.h3>

              <motion.p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto" variants={itemVariants}>
                Nuestro asistente de IA te guiará paso a paso para completar tu registro de manera rápida, segura y personalizada. ¡Es como tener un experto financiero a tu disposición 24/7!
              </motion.p>
            </div>

            {/* Features Grid */}
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" variants={itemVariants}>
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 hover:bg-white/80 transition-all duration-300"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className={`p-4 rounded-full mb-4 ${feature.color === "green" ? "bg-green-100" : feature.color === "yellow" ? "bg-yellow-100" : "bg-blue-100"}`}>
                      <Icon className={`w-8 h-8 ${feature.color === "green" ? "text-green-600" : feature.color === "yellow" ? "text-yellow-600" : "text-blue-600"}`} />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600 text-center">{feature.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* AI Preview */}
            <motion.div className="w-full p-8 bg-gradient-to-r from-red-50 to-red-100 rounded-2xl border-2 border-red-200 mb-8" variants={itemVariants} whileHover={{ scale: 1.02 }}>
              <div className="flex items-center justify-center space-x-4">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
                  <Bot className="w-8 h-8 text-red-600" />
                </motion.div>
                <div className="text-center">
                  <p className="text-red-800 font-semibold text-lg">🤖 "¡Hola! Soy tu asistente personal de Banco Marfil"</p>
                  <p className="text-red-600 text-sm mt-1">Te ayudaré a abrir tu cuenta en menos de 5 minutos</p>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
              <motion.button
                onClick={handleStartOnboarding}
                className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(220, 38, 38, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                disabled={isLoading}
              >
                <span className="relative z-10 flex items-center justify-center">
                  {isLoading ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Iniciando asistente...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 mr-2" />
                      Comenzar Onboarding
                    </>
                  )}
                </span>
                <motion.div className="absolute inset-0 bg-red-800" initial={{ x: "-100%" }} whileHover={{ x: "0%" }} transition={{ duration: 0.3 }} />
              </motion.button>

              <Link
                to="/"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-red-200 text-red-600 font-semibold rounded-xl hover:bg-red-50 hover:border-red-300 transition-all duration-300"
              >
                <motion.div className="flex items-center" whileHover={{ x: -5 }} transition={{ duration: 0.2 }}>
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver al Inicio
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer Info */}
        <motion.footer className="text-center text-gray-600 relative z-30" variants={itemVariants}>
          <motion.div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/50 mb-4" whileHover={{ scale: 1.02 }}>
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span>Proceso 100% seguro</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Solo 5 minutos</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-red-600" />
                <span>Sin costos ocultos</span>
              </div>
            </div>
          </motion.div>

          <p className="text-lg font-medium mb-2">¿Necesitas ayuda? Nuestro equipo está disponible 24/7</p>
          <div className="flex items-center justify-center space-x-6 text-sm">
            <span className="flex items-center space-x-1">
              <span>📞</span>
              <span>+54 11 1234-5678</span>
            </span>
            <span className="flex items-center space-x-1">
              <span>📧</span>
              <span>soporte@bancomarfil.com</span>
            </span>
          </div>
        </motion.footer>
      </motion.div>
    </div>
  );
}
