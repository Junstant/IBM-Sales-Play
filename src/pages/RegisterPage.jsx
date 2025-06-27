// File: src/pages/RegisterPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowLeft, Shield, Smartphone, CheckCircle } from 'lucide-react';
import logo from '../assets/logo.png';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular tiempo de registro
    setTimeout(() => {
      setIsLoading(false);
      navigate('/onboarding');
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.08,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.4
      }
    }
  };

  const inputFocusVariants = {
    focus: {
      scale: 1.01,
      boxShadow: "0 0 0 3px rgba(220, 38, 38, 0.1)",
      borderColor: "#dc2626",
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-300 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        className="max-w-lg w-full space-y-8 relative z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="text-center relative z-30" variants={itemVariants}>
          <motion.div
            variants={logoVariants}
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="inline-flex items-center space-x-3 mb-6 cursor-pointer relative z-40"
          >
            <div className="relative">
              <motion.img 
                src={logo} 
                alt="Banco Marfil" 
                className="h-12 w-12"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute inset-0 bg-red-600 rounded-full opacity-20 pointer-events-none"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900">Banco Marfil</span>
              <span className="text-sm text-red-600 font-medium">Tu dinero vale mil</span>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl font-extrabold text-gray-900 mb-2"
            variants={itemVariants}
          >
            Crea tu cuenta
          </motion.h2>
          <motion.p 
            className="text-gray-600"
            variants={itemVariants}
          >
            Únete a la revolución financiera
          </motion.p>
        </motion.div>

        {/* Form Card */}
        <motion.div 
          className="bg-white/80 backdrop-blur-sm py-8 px-6 shadow-2xl rounded-2xl border border-white/50 relative overflow-hidden z-30"
          variants={itemVariants}
          whileHover={{ 
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            transition: { duration: 0.2 }
          }}
        >
          {/* Card Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent pointer-events-none"></div>
          
          <form className="space-y-6 relative z-40" onSubmit={handleSubmit}>
            {/* Name Fields */}
            <motion.div className="grid grid-cols-2 gap-4" variants={itemVariants}>
              <div className="relative z-50">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre
                </label>
                <div className="relative">
                  <motion.input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="appearance-none block w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 bg-white/70 relative z-50"
                    placeholder="Juan"
                    whileFocus={inputFocusVariants.focus}
                  />
                  <User className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 pointer-events-none z-10" />
                </div>
              </div>

              <div className="relative z-50">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Apellido
                </label>
                <div className="relative">
                  <motion.input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="appearance-none block w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 bg-white/70 relative z-50"
                    placeholder="Pérez"
                    whileFocus={inputFocusVariants.focus}
                  />
                  <User className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 pointer-events-none z-10" />
                </div>
              </div>
            </motion.div>

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

            {/* Phone Field */}
            <motion.div variants={itemVariants} className="relative z-50">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono
              </label>
              <div className="relative">
                <motion.input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="appearance-none block w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 bg-white/70 relative z-50"
                  placeholder="+54 11 1234-5678"
                  whileFocus={inputFocusVariants.focus}
                />
                <Phone className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 pointer-events-none z-10" />
              </div>
            </motion.div>

            {/* Password Fields */}
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" variants={itemVariants}>
              <div className="relative z-50">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Contraseña
                </label>
                <div className="relative">
                  <motion.input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="new-password"
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
                    {showPassword ? 
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-red-600 transition-colors" /> : 
                      <Eye className="h-5 w-5 text-gray-400 hover:text-red-600 transition-colors" />
                    }
                  </motion.button>
                </div>
              </div>

              <div className="relative z-50">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Confirmar contraseña
                </label>
                <div className="relative">
                  <motion.input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="appearance-none block w-full px-4 py-3 pl-12 pr-12 border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 bg-white/70 relative z-50"
                    placeholder="••••••••"
                    whileFocus={inputFocusVariants.focus}
                  />
                  <Lock className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 pointer-events-none z-10" />
                  <motion.button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-4 flex items-center z-60 cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {showConfirmPassword ? 
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-red-600 transition-colors" /> : 
                      <Eye className="h-5 w-5 text-gray-400 hover:text-red-600 transition-colors" />
                    }
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Terms Checkbox */}
            <motion.div 
              className="flex items-center relative z-50"
              variants={itemVariants}
            >
              <motion.div 
                className="flex items-center cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <input
                  id="acceptTerms"
                  name="acceptTerms"
                  type="checkbox"
                  required
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded cursor-pointer"
                />
                <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                  Acepto los{' '}
                  <motion.a 
                    href="#" 
                    className="text-red-600 hover:text-red-800 underline font-medium"
                    whileHover={{ scale: 1.05 }}
                  >
                    términos y condiciones
                  </motion.a>
                </label>
              </motion.div>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200 overflow-hidden cursor-pointer z-60"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 10px 25px rgba(220, 38, 38, 0.3)",
                transition: { duration: 0.2 }
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
                    Creando cuenta...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Crear cuenta
                  </>
                )}
              </span>
              <motion.div 
                className="absolute inset-0 bg-red-800 pointer-events-none"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </form>

          {/* Divider */}
          <motion.div className="mt-6 relative z-40" variants={itemVariants}>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">¿Ya tienes cuenta?</span>
              </div>
            </div>
          </motion.div>

          {/* Login Button */}
          <motion.div className="mt-6 relative z-50" variants={itemVariants}>
            <Link
              to="/login"
              className="w-full flex justify-center py-3 px-4 border-2 border-red-200 rounded-xl text-sm font-medium text-red-600 bg-red-50/50 hover:bg-red-100/70 hover:border-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200 group cursor-pointer relative z-60"
            >
              <motion.span 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Shield className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Iniciar sesión
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Back to Home */}
        <motion.div className="text-center relative z-30" variants={itemVariants}>
          <Link 
            to="/" 
            className="inline-flex items-center text-sm text-gray-600 hover:text-red-600 transition-colors group cursor-pointer"
          >
            <motion.div 
              className="flex items-center"
              whileHover={{ x: -5 }}
              transition={{ duration: 0.2 }}
            >
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
            transition: { duration: 0.2 }
          }}
        >
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-green-600" />
              <span>Registro seguro</span>
            </div>
            <div className="flex items-center space-x-2">
              <Lock className="w-4 h-4 text-blue-600" />
              <span>Datos protegidos</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-red-600" />
              <span>Verificación instantánea</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
