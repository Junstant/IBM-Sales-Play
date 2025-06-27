import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Importar imágenes de assets
import heroImage1 from '../assets/heroImage1.webp';
import heroImage2 from '../assets/heroImage2.webp';
import heroImage3 from '../assets/heroImage3.webp';
import bubble1 from '../assets/bubble1.png';
import bubble2 from '../assets/bubble2.png';
import bubble3 from '../assets/bubble3.png';

const slides = [
  {
    id: 1,
    title: "Una app inteligente y segura",
    subtitle: "El match ideal para tu plata",
    heroImage: bubble1,
    primaryButton: "Hacete Marfil",
    secondaryButton: "Conocer app",
    bgClass: "bg-red-600",
    image: heroImage1
  },
  {
    id: 2,
    title: "Hacete Marfil gratis",
    subtitle: "Tenés beneficios, tarjetas de crédito, atención 24/7 ¡y más!",
    heroImage: bubble2,
    primaryButton: "Hacete Marfil",
    secondaryButton: "Conocer propuesta",
    bgClass: "bg-red-600",
    image: heroImage2
  },
  {
    id: 3,
    title: "Inversiones que multiplican tu dinero",
    subtitle: "Vení y disfrutá de rentabilidades superiores al 25% anual 📈",
    heroImage: bubble3,
    primaryButton: "Conocer beneficios",
    secondaryButton: "Conocer inversiones",
    bgClass: "bg-red-600",
    image: heroImage3
  }
];

export default function HeroCarousel({ onLoginClick, onRegisterClick }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered) {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Variantes optimizadas para eliminar tiempo muerto
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 1, // Cambiado de 0 a 1 para evitar parpadeo
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 2
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 1, // Mantener opacidad durante la salida
      scale: 0.95,
      zIndex: 1
    })
  };

  // Variantes para el contenido - más rápidas
  const contentVariants = {
    enter: {
      x: -30,
      opacity: 0
    },
    center: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Reducido de 0.1
        delayChildren: 0.1,    // Reducido de 0.2
        duration: 0.4
      }
    },
    exit: {
      x: 30,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  // Variantes para elementos individuales - más rápidas
  const itemVariants = {
    enter: {
      x: -15,
      opacity: 0
    },
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    },
    exit: {
      x: 15,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  // Variantes para la imagen - más rápidas
  const imageVariants = {
    enter: {
      x: 50,
      opacity: 0,
      scale: 0.9
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400, // Aumentado para más velocidad
        damping: 25,    // Reducido para menos rebote
        duration: 0.5
      }
    },
    exit: {
      x: -50,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3
      }
    }
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative h-96 lg:h-[600px] overflow-hidden">
      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.6, // Reducido de transiciones más largas
            ease: [0.4, 0, 0.2, 1] // Easing más suave
          }}
          className={`absolute inset-0 ${slide.bgClass}`}
        >
          {/* Background Image con animación más rápida */}
          <motion.div 
            className="absolute inset-0 opacity-20"
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.5 }} // Reducido de 0.8
          >
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
              {/* Contenido del texto con animaciones más rápidas */}
              <motion.div 
                className="text-white"
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <motion.h2 
                  className="text-3xl lg:text-5xl font-bold mb-4 leading-tight"
                  variants={itemVariants}
                >
                  {slide.title}
                </motion.h2>
                <motion.p 
                  className="text-xl lg:text-2xl mb-8 text-white/90"
                  variants={itemVariants}
                >
                  {slide.subtitle}
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  variants={itemVariants}
                >
                  <motion.button
                    onClick={onRegisterClick}
                    className="bg-white text-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-red-700 hover:text-white transition-colors relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">{slide.primaryButton}</span>
                    <motion.div 
                      className="absolute inset-0 bg-red-700"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                  <motion.button
                    onClick={onLoginClick}
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {slide.secondaryButton}
                  </motion.button>
                </motion.div>
              </motion.div>
              
              {/* Imagen con animaciones más rápidas */}
              <motion.div 
                className="flex justify-center lg:justify-end relative overflow-visible"
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Contenedor blur de fondo */}
                <motion.div 
                  className={`bg-white/10 backdrop-blur-sm border border-white/20 absolute z-10 transition-all duration-500 ease-in-out ${
                    isHovered 
                      ? 'w-64 h-64 rounded-full'
                      : 'w-80 h-60 rounded-2xl'
                  }`}
                  animate={{
                    scale: isHovered ? 0.9 : 1,
                    rotate: isHovered ? 5 : 0
                  }}
                  transition={{ duration: 0.5 }} // Reducido de 0.7
                />
                
                {/* Imagen */}
                <motion.img 
                  src={slide.heroImage} 
                  alt={slide.title} 
                  className={`relative z-20 object-cover transition-all duration-500 ease-in-out ${
                    isHovered 
                      ? 'w-96 h-96 rounded-full scale-100'
                      : 'w-[450px] h-[350px] rounded-2xl scale-110'
                  }`}
                  animate={{
                    rotate: isHovered ? [0, 2, -2, 0] : 0,
                    scale: isHovered ? 1 : 1.1
                  }}
                  transition={{ duration: 0.5 }} // Reducido de 0.7
                />
                
                {/* Overlay */}
                <motion.div 
                  className={`absolute z-30 inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-500 pointer-events-none ${
                    isHovered ? 'opacity-0' : 'opacity-100'
                  } ${
                    isHovered ? 'rounded-full' : 'rounded-2xl'
                  }`}
                  style={{
                    width: isHovered ? '384px' : '450px',
                    height: isHovered ? '384px' : '350px'
                  }}
                />
                
                {/* Efecto de partículas animadas */}
                <AnimatePresence>
                  {!isHovered && (
                    <motion.div 
                      className="absolute inset-0 pointer-events-none z-40"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }} // Reducido de 0.5
                    >
                      <motion.div 
                        className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full opacity-80"
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.8, 0.3, 0.8]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div 
                        className="absolute bottom-8 left-8 w-1 h-1 bg-white rounded-full opacity-60"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.6, 1, 0.6]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                      />
                      <motion.div 
                        className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-white rounded-full opacity-70"
                        animate={{ 
                          y: [0, -10, 0],
                          opacity: [0.7, 0.4, 0.7]
                        }}
                        transition={{ duration: 1.8, repeat: Infinity, delay: 1 }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation con animaciones */}
      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }} // Reducido de 1
      >
        <motion.button
          onClick={prevSlide}
          className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-colors"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>
        
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              animate={{
                scale: index === currentSlide ? 1.2 : 1,
                backgroundColor: index === currentSlide ? '#ffffff' : 'rgba(255, 255, 255, 0.4)'
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
        
        <motion.button
          onClick={nextSlide}
          className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-colors"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}