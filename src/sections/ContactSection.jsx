import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { MessageCircle, GraduationCap, Clock, Users } from "lucide-react";

const ContactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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

  const contactOptions = [
    {
      icon: MessageCircle,
      title: "Chateanos 24/7 por WhatsApp",
      description: "Hablemos cuando quieras. Estamos todos los días y a cualquier hora.",
      primaryButton: { text: "Chatear", color: "green" },
      secondaryButton: { text: "Ir a Ayuda", color: "gray" },
      bgColor: "green-100",
      iconColor: "green-600"
    },
    {
      icon: GraduationCap,
      title: "Charlas online que te suman",
      description: "Personas expertas hablan de inversiones, economía, finanzas y más.",
      primaryButton: { text: "Conocer más", color: "red" },
      secondaryButton: null,
      bgColor: "red-100",
      iconColor: "red-600"
    }
  ];

  const getButtonClasses = (color, isSecondary = false) => {
    const baseClasses = "px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden";
    
    if (isSecondary) {
      return `${baseClasses} border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50`;
    }
    
    switch (color) {
      case 'green':
        return `${baseClasses} bg-gradient-to-r from-green-600 to-green-700 text-white hover:shadow-lg`;
      case 'red':
        return `${baseClasses} bg-gradient-to-r from-red-600 to-red-700 text-white hover:shadow-lg`;
      default:
        return `${baseClasses} bg-gray-600 text-white`;
    }
  };

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-green-100 rounded-full opacity-30 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-red-100 rounded-full opacity-20 translate-y-1/2"></div>

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, threshold: 0.2 }}
      >
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-red-600 mr-3" />
            <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">
              Atención Personalizada
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-black">
            Siempre estamos para ayudarte
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {contactOptions.map((option, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden group"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${option.bgColor} to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
              
              <div className="relative">
                <motion.div 
                  className="flex items-center mb-6"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <motion.div 
                    className={`w-16 h-16 bg-${option.bgColor} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 10,
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <option.icon className={`w-8 h-8 text-${option.iconColor}`} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-black group-hover:text-red-600 transition-colors duration-300">
                    {option.title}
                  </h3>
                </motion.div>
                
                <motion.p 
                  className="text-gray-700 mb-8 leading-relaxed text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.2 }}
                >
                  {option.description.split(' ').map((word, i) => 
                    word.includes('24') || word.includes('todos') || word.includes('cualquier') ? (
                      <motion.strong 
                        key={i} 
                        className="text-black"
                        animate={{ color: ["#000", "#dc2626", "#000"] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
                      >
                        {word}{' '}
                      </motion.strong>
                    ) : (
                      <span key={i}>{word} </span>
                    )
                  )}
                </motion.p>
                
                <motion.div 
                  className="flex gap-4 flex-wrap"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                >
                  <motion.button 
                    className={getButtonClasses(option.primaryButton.color)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <option.icon className="w-5 h-5" />
                      {option.primaryButton.text}
                    </span>
                    <motion.div 
                      className={`absolute inset-0 ${
                        option.primaryButton.color === 'green' ? 'bg-green-800' : 'bg-red-800'
                      }`}
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                  
                  {option.secondaryButton && (
                    <motion.button 
                      className={getButtonClasses(option.secondaryButton.color, true)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Clock className="w-5 h-5 mr-2" />
                      {option.secondaryButton.text}
                    </motion.button>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;