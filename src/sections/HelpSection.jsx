import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { HelpCircle, MessageSquare, Phone, Mail } from "lucide-react";

const HelpSection = () => {
  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      boxShadow: [
        "0 0 0 0 rgba(220, 38, 38, 0.4)",
        "0 0 0 20px rgba(220, 38, 38, 0)",
        "0 0 0 0 rgba(220, 38, 38, 0)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const supportOptions = [
    { icon: MessageSquare, text: "Chat en vivo" },
    { icon: Phone, text: "Llamada telefónica" },
    { icon: Mail, text: "Email de soporte" }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-red-50 rounded-full opacity-50"></div>
      <div className="absolute top-20 right-20 w-24 h-24 bg-red-100 rounded-full opacity-30"></div>
      <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-red-50 rounded-full opacity-40"></div>

      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, threshold: 0.3 }}
      >
        <motion.div 
          className="w-32 h-32 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-8 relative"
          variants={itemVariants}
          animate="animate"
          {...pulseVariants}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <HelpCircle className="w-16 h-16 text-red-600" />
          </motion.div>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <div className="flex items-center justify-center mb-4">
            <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">
              Soporte 24/7
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            ¿Necesitás{" "}
            <motion.span 
              className="text-red-600"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ayuda
            </motion.span>
            ?
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Respondemos tus dudas de forma rápida y personalizada.
          </p>
        </motion.div>

        {/* Support Options */}
        <motion.div 
          className="flex justify-center items-center gap-8 mb-12"
          variants={itemVariants}
        >
          {supportOptions.map((option, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-gray-600"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, color: "#dc2626" }}
            >
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-2 hover:bg-red-100 transition-colors duration-300">
                <option.icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">{option.text}</span>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.button 
          className="bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-4 rounded-xl font-semibold text-lg relative overflow-hidden group"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 40px -10px rgba(220, 38, 38, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 flex items-center gap-3">
            <HelpCircle className="w-6 h-6" />
            Ir a ayuda
          </span>
          <motion.div 
            className="absolute inset-0 bg-red-800"
            initial={{ x: "-100%" }}
            whileHover={{ x: "0%" }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute inset-0 bg-white opacity-20"
            animate={{ 
              scale: [0, 2, 0],
              opacity: [0, 0.2, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HelpSection;