import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { TrendingUp, Shield, Eye, Target } from "lucide-react";
import appImage from "../assets/banking-app.jpg";

const InvestmentSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const features = [
    {
      icon: Shield,
      text: "Fondos diversificados de bajo riesgo"
    },
    {
      icon: Target,
      text: "Gestión profesional de activos"
    },
    {
      icon: Eye,
      text: "Transparencia total en movimientos"
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-50 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-red-50 to-transparent rounded-full translate-x-1/2 translate-y-1/2"></div>

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, threshold: 0.2 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-6">
              <TrendingUp className="w-8 h-8 text-red-600 mr-3" />
              <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">
                Inversiones Inteligentes
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              Inversiones que{" "}
              <motion.span 
                className="text-red-600"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                multiplican
              </motion.span>{" "}
              tu dinero
            </h2>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Accedé a los mejores fondos de inversión con{" "}
              <motion.span 
                className="text-red-600 font-semibold text-2xl"
                animate={{ color: ["#dc2626", "#ef4444", "#dc2626"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                rentabilidades superiores al 25% anual
              </motion.span>
              .
            </p>
            
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <feature.icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  <span className="text-gray-700 text-lg group-hover:text-red-600 transition-colors duration-300">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
            
            <motion.button 
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl font-semibold relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Comenzar a invertir
              </span>
              <motion.div 
                className="absolute inset-0 bg-red-800"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="flex justify-center"
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-red-600 to-red-400 rounded-xl opacity-20 blur-lg"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <img 
                src={appImage} 
                alt="Inversiones Bancarias" 
                className="w-full max-w-md rounded-xl shadow-2xl relative z-10" 
                loading="lazy" 
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default InvestmentSection;