import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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

  const footerSections = [
    {
      title: "Conocenos",
      links: [
        "Información Financiera",
        "Disciplina de Mercado", 
        "Información corporativa",
        "Banco Marfil Sustentable"
      ]
    },
    {
      title: "Atención al cliente",
      links: [
        "Ayuda",
        "Sacar turno para sucursal",
        "Contactanos",
        "Hacete Marfil"
      ]
    },
    {
      title: "Productos",
      links: [
        "Tarjetas de Crédito y Débito",
        "Préstamos Personales",
        "Plazo Fijo",
        "App Marfil"
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: "f", color: "bg-blue-600" },
    { name: "Instagram", icon: "ig", color: "bg-pink-600" },
    { name: "Twitter", icon: "tw", color: "bg-blue-400" }
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-600 rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, threshold: 0.2 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              className="flex flex-col"
              variants={itemVariants}
            >
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i} className="text-sm">
                    {link}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-gray-700 my-8"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm">
            © 2023 Banco Marfil. Todos los derechos reservados.
          </div>

          <div className="flex space-x-4 mt-4 sm:mt-0">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href="#"
                className={`flex items-center justify-center w-8 h-8 rounded-full ${social.color}`}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-white text-xs font-semibold">{social.icon}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;