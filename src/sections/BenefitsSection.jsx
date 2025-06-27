// File: src/sections/BenefitsSection.jsx
import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, DollarSign, Shield, Banknote } from 'lucide-react';

const benefits = [
    {
        id: 1,
        title: 'Atención 24/7',
        description:
            'Nuestro equipo de soporte especializado está disponible las 24 horas para asistirte.',
        icon: <Clock className="w-8 h-8" />,
    },
    {
        id: 2,
        title: 'Sin Comisiones Ocultas',
        description:
            'Creemos en la transparencia total. Sin sorpresas, sin costos escondidos.',
        icon: <DollarSign className="w-8 h-8" />,
    },
    {
        id: 3,
        title: 'Seguridad Avanzada',
        description:
            'Tus datos y dinero están protegidos por protocolos de seguridad líderes en la industria.',
        icon: <Shield className="w-8 h-8" />,
    },
    {
        id: 4,
        title: 'Créditos Flexibles',
        description:
            'Opciones de préstamos personalizadas para tus necesidades personales y empresariales.',
        icon: <Banknote className="w-8 h-8" />,
    },
];

export default function BenefitsSection() {
    const [hoveredBenefit, setHoveredBenefit] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const benefitVariants = {
        hidden: { 
            opacity: 0,
            y: 60,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
                duration: 0.6
            }
        },
        hover: {
            y: -15,
            scale: 1.05,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };

    const iconVariants = {
        rest: { 
            scale: 1,
            rotate: 0
        },
        hover: { 
            scale: 1.2,
            rotate: [0, -10, 10, -10, 0],
            transition: {
                duration: 0.6,
                ease: "easeInOut"
            }
        }
    };

    const particleVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Animated decorative background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div 
                    className="absolute top-20 left-10 w-32 h-32 bg-red-100 rounded-full opacity-20"
                    animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div 
                    className="absolute bottom-20 right-10 w-24 h-24 bg-gray-100 rounded-full opacity-30"
                    animate={{ 
                        y: [0, -20, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
                <motion.div 
                    className="absolute top-1/2 left-1/3 w-16 h-16 bg-red-50 rounded-full opacity-40"
                    animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative">
                {/* Animated header with complex animations */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                >
                    <motion.h3 
                        className="text-4xl lg:text-5xl font-extrabold text-black mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        ¿Por qué elegir Banco Marfil?
                    </motion.h3>
                    <motion.div 
                        className="w-24 h-1 bg-red-600 mx-auto mb-8 rounded"
                        initial={{ scaleX: 0, originX: 0.5 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    />
                    <motion.p 
                        className="text-gray-700 text-center max-w-2xl mx-auto text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        Beneficios únicos que marcan la diferencia en tu experiencia bancaria
                    </motion.p>
                </motion.div>

                {/* Benefits grid with advanced animations */}
                <motion.div 
                    className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {benefits.map(({ id, title, description, icon }) => (
                        <motion.div
                            key={id}
                            className="group flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-200 relative overflow-hidden cursor-pointer"
                            variants={benefitVariants}
                            whileHover="hover"
                            onHoverStart={() => setHoveredBenefit(id)}
                            onHoverEnd={() => setHoveredBenefit(null)}
                        >
                            {/* Animated background glow */}
                            <motion.div 
                                className="absolute inset-0 pointer-events-none rounded-2xl"
                                animate={{
                                    background: hoveredBenefit === id 
                                        ? "linear-gradient(135deg, rgba(220, 38, 38, 0.1), rgba(239, 68, 68, 0.05))"
                                        : "transparent"
                                }}
                                transition={{ duration: 0.3 }}
                            />

                            {/* Dynamic floating particles */}
                            <AnimatePresence>
                                {hoveredBenefit === id && (
                                    <>
                                        {[...Array(6)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute w-1 h-1 bg-red-400 rounded-full"
                                                style={{
                                                    top: `${20 + i * 15}%`,
                                                    right: `${10 + i * 10}%`,
                                                }}
                                                variants={particleVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                                transition={{ delay: i * 0.1 }}
                                            />
                                        ))}
                                    </>
                                )}
                            </AnimatePresence>

                            {/* Icon with complex animation */}
                            <motion.div 
                                className="relative mb-6"
                                variants={iconVariants}
                                initial="rest"
                                whileHover="hover"
                            >
                                <motion.div 
                                    className="absolute inset-0 bg-red-600 rounded-full opacity-20"
                                    animate={{
                                        scale: hoveredBenefit === id ? [1, 1.2, 1] : 1,
                                        opacity: hoveredBenefit === id ? [0.2, 0.4, 0.2] : 0.2
                                    }}
                                    transition={{ duration: 1, repeat: hoveredBenefit === id ? Infinity : 0 }}
                                />
                                <motion.div 
                                    className="relative p-5 bg-red-600 rounded-full shadow-lg"
                                    animate={{
                                        boxShadow: hoveredBenefit === id 
                                            ? "0 20px 25px -5px rgba(220, 38, 38, 0.4), 0 10px 10px -5px rgba(220, 38, 38, 0.2)"
                                            : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                                    }}
                                >
                                    {React.cloneElement(icon, {
                                        className: 'w-10 h-10 text-white',
                                    })}
                                </motion.div>
                            </motion.div>

                            {/* Content with staggered text animations */}
                            <motion.h4 
                                className="text-xl font-bold mb-3"
                                animate={{
                                    color: hoveredBenefit === id ? "#dc2626" : "#000000",
                                    scale: hoveredBenefit === id ? 1.05 : 1
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {title}
                            </motion.h4>
                            <motion.p 
                                className="text-gray-700 leading-relaxed"
                                animate={{
                                    color: hoveredBenefit === id ? "#374151" : "#6b7280"
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {description}
                            </motion.p>

                            {/* Animated border that expands on hover */}
                            <motion.div 
                                className="absolute bottom-0 left-0 h-1 bg-red-600 rounded-b-2xl"
                                animate={{
                                    width: hoveredBenefit === id ? "100%" : "0%"
                                }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            />

                            {/* Subtle shadow animation */}
                            <motion.div
                                className="absolute inset-0 rounded-2xl"
                                animate={{
                                    boxShadow: hoveredBenefit === id 
                                        ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                                        : "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to action with magnetic effect */}
                <motion.div 
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1 }}
                >
                    <motion.button 
                        className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold relative overflow-hidden group"
                        whileHover={{ 
                            scale: 1.05,
                            backgroundColor: "#dc2626"
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <motion.span 
                            className="relative z-10"
                            whileHover={{ letterSpacing: "0.05em" }}
                            transition={{ duration: 0.2 }}
                        >
                            Conocer todos los beneficios
                        </motion.span>
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "0%" }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}