import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Star, Download, Users } from "lucide-react";
import bgPromos from "../assets/bg-promos.png";
import appImageRender from "../assets/bubble5.png";

const AppDownloadSection = ({ onRegisterClick }) => {
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

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 2, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const testimonials = [
    {
      text: "Es el mejor banco que existe, siempre a disposición y con los mejores beneficios",
      author: "María G.",
      rating: 5
    },
    {
      text: "Fácil de usar, práctica, es completa, facilita el día a día",
      author: "Carlos R.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img src={bgPromos} alt="Background" className="w-full h-full object-cover" loading="lazy" />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-red-100 rounded-full opacity-50"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-red-50 rounded-full opacity-30"></div>

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, threshold: 0.2 }}
      >
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex items-center justify-center mb-4">
            <Download className="w-8 h-8 text-red-600 mr-3" />
            <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">
              Descarga Gratuita
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            Descargá la app de tu banco favorito
          </h2>
          <div className="flex items-center justify-center gap-2 text-xl text-gray-700">
            <Users className="w-6 h-6 text-red-600" />
            <span>Ya tiene más de</span>
            <motion.strong 
              className="text-red-600 text-2xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              2.187.455 descargas
            </motion.strong>
            <span>¡La vas a amar!</span>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* App Preview Card */}
          <motion.div 
            className="lg:w-1/2"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-50"></div>
              
              <div className="relative">
                <motion.div 
                  className="flex items-center justify-center mb-6"
                  variants={floatingVariants}
                  animate="animate"
                >
                  <div className="w-80 h-80 bg-gradient-to-br from-red-50 to-red-100 rounded-full flex items-center justify-center shadow-inner">
                    <motion.img 
                      src={appImageRender} 
                      alt="App Marfil" 
                      loading="lazy"
                      className="w-64 h-64"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
                
                <h3 className="text-2xl font-bold text-black mb-4">App Marfil</h3>
                <p className="text-gray-700 mb-6">
                  Son dos minutos. Escaneá el QR ¡y listo!
                </p>
                
                <motion.button 
                  onClick={onRegisterClick} 
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-6 rounded-xl font-semibold relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Download className="w-5 h-5" />
                    Descargar App Marfil gratis
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-red-800"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Testimonials */}
          <motion.div 
            className="lg:w-1/2"
            variants={itemVariants}
          >
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-600 relative overflow-hidden"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.02,
                    borderLeftWidth: "6px"
                  }}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-red-50 rounded-full -mr-10 -mt-10"></div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  
                  <p className="text-gray-700 italic mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-red-600 font-bold">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <strong className="text-black">- {testimonial.author}</strong>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AppDownloadSection;