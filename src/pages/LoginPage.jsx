// File: src/pages/LoginPage.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, ArrowLeft, Shield, Smartphone } from "lucide-react";
import logo from "../assets/logo.png";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function LoginPage() {
  useDocumentTitle("Ingresar");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/onboarding");
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Variantes de animación optimizadas
  const containerVariants = {
    hidden: { opacity: 0, y: 30 }, // Reducido de 50 a 30
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4, // Reducido de 0.6 a 0.4
        staggerChildren: 0.08, // Reducido de 0.1 a 0.08
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 }, // Reducido de 20 a 15
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3, // Reducido de 0.5 a 0.3
        ease: "easeOut",
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -5 }, // Ajustado
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300, // Aumentado para más rapidez
        damping: 25, // Reducido para menos rebote
        duration: 0.4,
      },
    },
  };

  const inputFocusVariants = {
    focus: {
      scale: 1.01, // Reducido de 1.02 a 1.01
      boxShadow: "0 0 0 3px rgba(220, 38, 38, 0.1)",
      borderColor: "#dc2626",
      transition: { duration: 0.2 }, // Agregado
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {" "}
        {/* Agregado pointer-events-none */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-300 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="max-w-md w-full space-y-8 relative z-20" // Aumentado z-index de z-10 a z-20
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="text-center relative z-30" variants={itemVariants}>
          <motion.div variants={logoVariants} whileHover={{ scale: 1.05, rotate: 5 }} className="inline-flex items-center space-x-3 mb-6 cursor-pointer relative z-40">
            <div className="relative">
              <motion.img src={logo} alt="Banco Marfil" className="h-12 w-12" animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
              <motion.div className="absolute inset-0 bg-red-600 rounded-full opacity-20 pointer-events-none" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900">Banco Marfil</span>
              <span className="text-sm text-red-600 font-medium">Tu dinero vale mil</span>
            </div>
          </motion.div>

          <motion.h2 className="text-3xl font-extrabold text-gray-900 mb-2" variants={itemVariants}>
            Bienvenido de vuelta
          </motion.h2>
          <motion.p className="text-gray-600" variants={itemVariants}>
            Inicia sesión para acceder a tu cuenta
          </motion.p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm py-8 px-6 shadow-2xl rounded-2xl border border-white/50 relative overflow-hidden z-30"
          variants={itemVariants}
          whileHover={{
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            transition: { duration: 0.2 },
          }}
        >
          {/* Card Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent pointer-events-none"></div>

          <form className="space-y-6 relative z-40" onSubmit={handleSubmit}>
            {/* Email Field */}
            <motion.div variants={itemVariants} className="relative z-50">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Correo electrónico
              </label>
              <div className="relative">
                <motion.input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none block w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 bg-white/70 relative z-50"
                  placeholder="correo@ejemplo.com"
                  whileFocus={inputFocusVariants.focus}
                />
                <Mail className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 pointer-events-none z-10" />
              </div>
            </motion.div>

            {/* Password Field */}
            <motion.div variants={itemVariants} className="relative z-50">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Contraseña
              </label>
              <div className="relative">
                <motion.input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="appearance-none block w-full px-4 py-3 pl-12 pr-12 border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 bg-white/70 relative z-50"
                  placeholder="••••••••"
                  whileFocus={inputFocusVariants.focus}
                />
                <Lock className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 pointer-events-none z-10" />
                <motion.button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center z-60 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {showPassword ? <EyeOff className="h-5 w-5 text-gray-400 hover:text-red-600 transition-colors" /> : <Eye className="h-5 w-5 text-gray-400 hover:text-red-600 transition-colors" />}
                </motion.button>
              </div>
            </motion.div>

            {/* Remember Me & Forgot Password */}
            <motion.div className="flex items-center justify-between relative z-50" variants={itemVariants}>
              <motion.div className="flex items-center cursor-pointer" whileHover={{ scale: 1.02 }}>
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded cursor-pointer" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                  Recordarme
                </label>
              </motion.div>

              <motion.a href="#" className="text-sm font-medium text-red-600 hover:text-red-800 transition-colors cursor-pointer" whileHover={{ scale: 1.05 }}>
                ¿Olvidaste tu contraseña?
              </motion.a>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200 overflow-hidden cursor-pointer z-60"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(220, 38, 38, 0.3)",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
              disabled={isLoading}
            >
              <span className="relative z-10 flex items-center">
                {isLoading ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Iniciando sesión...
                  </>
                ) : (
                  <>
                    <Shield className="w-5 h-5 mr-2" />
                    Iniciar sesión
                  </>
                )}
              </span>
              <motion.div className="absolute inset-0 bg-red-800 pointer-events-none" initial={{ x: "-100%" }} whileHover={{ x: "0%" }} transition={{ duration: 0.3 }} />
            </motion.button>
          </form>

          {/* Divider */}
          <motion.div className="mt-6 relative z-40" variants={itemVariants}>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">¿No tienes cuenta?</span>
              </div>
            </div>
          </motion.div>

          {/* Register Button */}
          <motion.div className="mt-6 relative z-50" variants={itemVariants}>
            <Link
              to="/register"
              className="w-full flex justify-center py-3 px-4 border-2 border-red-200 rounded-xl text-sm font-medium text-red-600 bg-red-50/50 hover:bg-red-100/70 hover:border-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200 group cursor-pointer relative z-60"
            >
              <motion.span className="flex items-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Smartphone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Crear cuenta nueva
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Back to Home */}
        <motion.div className="text-center relative z-30" variants={itemVariants}>
          <Link to="/" className="inline-flex items-center text-sm text-gray-600 hover:text-red-600 transition-colors group cursor-pointer">
            <motion.div className="flex items-center" whileHover={{ x: -5 }} transition={{ duration: 0.2 }}>
              <ArrowLeft className="w-4 h-4 mr-1 group-hover:text-red-600" />
              Volver al inicio
            </motion.div>
          </Link>
        </motion.div>

        {/* Security Features */}
        <motion.div
          className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50 relative z-30"
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
        >
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-green-600" />
              <span>Conexión segura</span>
            </div>
            <div className="flex items-center space-x-2">
              <Lock className="w-4 h-4 text-blue-600" />
              <span>Datos encriptados</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
