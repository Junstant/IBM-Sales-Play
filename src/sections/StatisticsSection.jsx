// File: src/sections/StatisticsSection.jsx
import React, { useState, useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";

const stats = [
  {
    id: 1,
    label: "Clientes Activos",
    value: "850K+",
    number: 850,
    suffix: "K+",
    duration: 2.5,
  },
  {
    id: 2,
    label: "Cuentas Abiertas Este Año",
    value: "285K",
    number: 285,
    suffix: "K",
    duration: 2,
  },
  {
    id: 3,
    label: "Préstamos Aprobados",
    value: "$3.2B",
    number: 3.2,
    suffix: "B",
    prefix: "$",
    duration: 2.8,
  },
  {
    id: 4,
    label: "Sucursales Nacionales",
    value: "120+",
    number: 120,
    suffix: "+",
    duration: 1.8,
  },
  {
    id: 5,
    label: "Satisfacción del Cliente",
    value: "98%",
    number: 98,
    suffix: "%",
    duration: 2.2,
  },
  {
    id: 6,
    label: "Años de Experiencia",
    value: "25+",
    number: 25,
    suffix: "+",
    duration: 1.5,
  },
];

// Counter animation component
const AnimatedCounter = ({ stat, inView }) => {
  const [current, setCurrent] = useState(0);
  const { number, suffix = "", prefix = "", duration } = stat;

  useEffect(() => {
    if (inView) {
      const increment = number / (duration * 60); // 60fps
      const timer = setInterval(() => {
        setCurrent((prev) => {
          const next = prev + increment;
          if (next >= number) {
            clearInterval(timer);
            return number;
          }
          return next;
        });
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [inView, number, duration]);

  const formatNumber = (num) => {
    if (suffix === "B") return num.toFixed(1);
    if (suffix === "K" || suffix === "K+") return Math.floor(num);
    return Math.floor(num);
  };

  return (
    <span>
      {prefix}
      {formatNumber(current)}
      {suffix}
    </span>
  );
};

export default function StatisticsSection() {
  const [hoveredStat, setHoveredStat] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const statVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      z: 50,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const pulseVariants = {
    rest: { scale: 1, opacity: 0.8 },
    hover: {
      scale: [1, 1.2, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-16 left-20 w-64 h-64 bg-red-100 rounded-full opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 120, 360],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-16 right-20 w-48 h-48 bg-black/5 rounded-full opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-red-50 rounded-full opacity-15"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Animated header with 3D effects */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <motion.h3
            className="text-5xl lg:text-6xl font-extrabold text-black mb-6"
            initial={{ opacity: 0, scale: 0.5, rotateX: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ perspective: "1000px" }}
          >
            Nuestro Impacto en Números
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
            Cifras que demuestran por qué somos el banco de confianza para miles de familias
          </motion.p>
        </motion.div>

        {/* Statistics grid - 2 filas x 3 columnas */}
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ perspective: "1000px" }}
        >
          {stats.map((stat) => (
            <motion.div 
              key={stat.id} 
              className="group relative" 
              variants={statVariants} 
              whileHover="hover" 
              onHoverStart={() => setHoveredStat(stat.id)} 
              onHoverEnd={() => setHoveredStat(null)}
            >
              <div className="relative bg-white rounded-3xl p-12 shadow-xl border border-gray-200 text-center overflow-hidden min-h-[280px] flex flex-col justify-center">
                {/* Animated background glow */}
                <motion.div
                  className="absolute inset-0 pointer-events-none rounded-3xl"
                  animate={{
                    background: hoveredStat === stat.id ? "linear-gradient(135deg, rgba(220, 38, 38, 0.1), rgba(239, 68, 68, 0.05))" : "transparent",
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating particles around the number */}
                {hoveredStat === stat.id && (
                  <>
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-red-400 rounded-full"
                        style={{
                          top: `${30 + Math.sin((i * 45 * Math.PI) / 180) * 25}%`,
                          left: `${50 + Math.cos((i * 45 * Math.PI) / 180) * 35}%`,
                        }}
                        animate={{
                          scale: [0, 1.2, 0],
                          opacity: [0, 1, 0],
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.1,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </>
                )}

                {/* Pulsing ring behind number */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-red-200 rounded-full"
                  style={{
                    x: "-50%",
                    y: "-60%",
                    opacity: hoveredStat === stat.id ? 1 : 0,
                  }}
                  variants={pulseVariants}
                  initial="rest"
                  animate={hoveredStat === stat.id ? "hover" : "rest"}
                />

                {/* Animated number with counter */}
                <motion.div
                  className="relative z-10 text-6xl lg:text-7xl font-extrabold mb-6"
                  animate={{
                    background: hoveredStat === stat.id ? "linear-gradient(135deg, #dc2626, #ef4444)" : "linear-gradient(135deg, #000000, #374151)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    scale: hoveredStat === stat.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <AnimatedCounter stat={stat} inView={inView} />
                </motion.div>

                {/* Label with subtle animation */}
                <motion.div
                  className="text-lg lg:text-xl font-semibold leading-tight relative z-10 max-w-full"
                  animate={{
                    color: hoveredStat === stat.id ? "#374151" : "#6b7280",
                    y: hoveredStat === stat.id ? -3 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.label}
                </motion.div>

                {/* Animated border that grows on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-red-600 to-red-400 rounded-b-3xl"
                  animate={{
                    width: hoveredStat === stat.id ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />

                {/* 3D shadow effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  animate={{
                    boxShadow: hoveredStat === stat.id ? "0 25px 50px -12px rgba(220, 38, 38, 0.25)" : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
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
                ¿Querés ser parte de estos números?
              </motion.h4>
              <motion.p 
                className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto" 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.2 }}
              >
                Únete a miles de familias que ya confían en Banco Marfil para sus finanzas.
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  className="bg-red-600 text-white px-10 py-4 rounded-xl font-semibold shadow-lg relative overflow-hidden"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#dc2626",
                    boxShadow: "0 20px 25px -5px rgba(220, 38, 38, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Abrir cuenta ahora</span>
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
                    color: "#ffffff",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver más estadísticas
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
