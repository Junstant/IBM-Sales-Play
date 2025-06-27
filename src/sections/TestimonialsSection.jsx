// File: src/sections/TestimonialsSection.jsx
import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'María González',
    title: 'Empresaria',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'Banco Marfil ha transformado la forma en que manejo las finanzas de mi empresa. Su plataforma es intuitiva y el servicio al cliente excepcional.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    title: 'Freelancer',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'Abrir mi cuenta fue súper fácil, y su soporte técnico siempre está disponible cuando tengo dudas. Realmente mi dinero vale mil aquí.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ana Martínez',
    title: 'Inversionista',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: 'Aprecio mucho la transparencia y seguridad que ofrece Banco Marfil. Me siento confiada de invertir aquí y ver crecer mi patrimonio.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [hoveredTestimonial, setHoveredTestimonial] = useState(null);

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

  const testimonialVariants = {
    hidden: { 
      opacity: 0,
      y: 60,
      scale: 0.9,
      rotateX: -10
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      z: 50,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  };

  const avatarVariants = {
    rest: { 
      scale: 1,
      rotate: 0,
      filter: "brightness(1)"
    },
    hover: { 
      scale: 1.1,
      rotate: [0, -5, 5, -5, 0],
      filter: "brightness(1.1)",
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  const quoteVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 0.3
      }
    }
  };

  const starVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }),
    hover: {
      scale: [1, 1.3, 1],
      rotate: [0, 360],
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Animated decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-16 w-40 h-40 bg-red-100 rounded-full opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-16 right-16 w-32 h-32 bg-black/10 rounded-full opacity-25"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-red-50 rounded-full opacity-30"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Animated header with advanced effects */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <motion.h3
            className="text-5xl lg:text-6xl font-extrabold text-black mb-6"
            initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ perspective: "1000px" }}
          >
            Confianza que Habla por Sí Sola
          </motion.h3>
          <motion.div 
            className="w-32 h-1 bg-red-600 mx-auto mb-8 rounded"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.p
            className="text-gray-700 text-center mb-16 max-w-3xl mx-auto text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Miles de clientes han descubierto por qué su dinero vale mil con nosotros
          </motion.p>
        </motion.div>
        
        {/* Testimonials grid with advanced animations */}
        <motion.div 
          className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ perspective: "1000px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="group relative"
              variants={testimonialVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredTestimonial(testimonial.id)}
              onHoverEnd={() => setHoveredTestimonial(null)}
            >
              <blockquote 
                className="bg-white rounded-3xl p-10 shadow-xl border border-gray-200 flex flex-col relative overflow-hidden min-h-[400px]"
                aria-label={`Testimonio de ${testimonial.name}, ${testimonial.title}`}
              >
                {/* Animated background glow */}
                <motion.div 
                  className="absolute inset-0 pointer-events-none rounded-3xl"
                  animate={{
                    background: hoveredTestimonial === testimonial.id 
                      ? "linear-gradient(135deg, rgba(220, 38, 38, 0.05), rgba(239, 68, 68, 0.02))"
                      : "transparent"
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating quote particles */}
                <AnimatePresence>
                  {hoveredTestimonial === testimonial.id && (
                    <>
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-red-400 rounded-full"
                          style={{
                            top: `${20 + i * 12}%`,
                            right: `${15 + i * 8}%`,
                          }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1.2, 0],
                            y: [0, -20, -40]
                          }}
                          exit={{ opacity: 0, scale: 0 }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeOut"
                          }}
                        />
                      ))}
                    </>
                  )}
                </AnimatePresence>

                {/* Large decorative quote mark */}
                <motion.div 
                  className="absolute top-6 left-6 opacity-10"
                  variants={quoteVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Quote className="w-12 h-12 text-red-600" />
                </motion.div>

                {/* Rating stars with individual animations */}
                <div className="flex justify-center mb-8 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      variants={starVariants}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      custom={i}
                      viewport={{ once: true }}
                    >
                      <Star className="w-6 h-6 text-red-600 fill-current mx-1" />
                    </motion.div>
                  ))}
                </div>
                
                {/* Avatar with complex animation */}
                <motion.div 
                  className="flex justify-center mb-8 relative z-10"
                  variants={avatarVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <div className="relative">
                    <motion.div 
                      className="absolute inset-0 bg-red-600 rounded-full opacity-20 scale-110"
                      animate={{
                        scale: hoveredTestimonial === testimonial.id ? [1.1, 1.2, 1.1] : 1.1,
                        opacity: hoveredTestimonial === testimonial.id ? [0.2, 0.3, 0.2] : 0.2
                      }}
                      transition={{ duration: 1.5, repeat: hoveredTestimonial === testimonial.id ? Infinity : 0 }}
                    />
                    <img
                      src={testimonial.avatar}
                      alt={`Avatar de ${testimonial.name}`}
                      className="w-24 h-24 rounded-full object-cover shadow-xl border-4 border-white relative z-10"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
                
                {/* Quote text with typewriter effect simulation */}
                <motion.p 
                  className="text-gray-700 text-lg italic text-center mb-8 flex-grow leading-relaxed relative z-10"
                  animate={{
                    color: hoveredTestimonial === testimonial.id ? "#374151" : "#6b7280"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    "{testimonial.quote}"
                  </motion.span>
                </motion.p>
                
                {/* Footer with sliding animation */}
                <motion.footer 
                  className="text-center relative z-10"
                  animate={{
                    y: hoveredTestimonial === testimonial.id ? -3 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="font-bold text-xl mb-2"
                    animate={{
                      color: hoveredTestimonial === testimonial.id ? "#dc2626" : "#000000"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {testimonial.name}
                  </motion.div>
                  <motion.div 
                    className="font-semibold"
                    animate={{
                      color: hoveredTestimonial === testimonial.id ? "#374151" : "#6b7280"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {testimonial.title}
                  </motion.div>
                </motion.footer>

                {/* Animated border bottom */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-b-3xl"
                  animate={{
                    width: hoveredTestimonial === testimonial.id ? "100%" : "0%"
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />

                {/* Dynamic shadow */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  animate={{
                    boxShadow: hoveredTestimonial === testimonial.id 
                      ? "0 25px 50px -12px rgba(220, 38, 38, 0.25)"
                      : "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </blockquote>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action with magnetic effect */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div 
            className="bg-white p-10 rounded-3xl shadow-xl border border-gray-200 max-w-4xl mx-auto relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative z-10">
              <motion.h4 
                className="text-3xl font-bold text-black mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                ¿Querés ser nuestro próximo testimonio?
              </motion.h4>
              <motion.p 
                className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Únete a miles de clientes satisfechos que ya disfrutan de la experiencia Banco Marfil.
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button 
                  className="bg-red-600 text-white px-10 py-4 rounded-xl font-semibold shadow-lg relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "#dc2626",
                    boxShadow: "0 20px 25px -5px rgba(220, 38, 38, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Comenzar ahora</span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                <motion.button 
                  className="border-2 border-black text-black px-10 py-4 rounded-xl font-semibold"
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "#000000",
                    color: "#ffffff"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver más testimonios
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;