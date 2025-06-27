// File: src/sections/TestimonialsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

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
  return (
    <>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-gray-900 text-center mb-4"
      >
        Confianza que Habla por Sí Sola
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-gray-600 text-center mb-16 max-w-2xl mx-auto text-lg"
      >
        Miles de clientes han descubierto por qué su dinero vale mil con nosotros
      </motion.p>
      
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {testimonials.map(({ id, name, title, avatar, quote, rating }, index) => (
          <motion.blockquote
            key={id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100"
            aria-label={`Testimonio de ${name}, ${title}`}
          >
            {/* Rating stars */}
            <div className="flex justify-center mb-6">
              {[...Array(rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <img
              src={avatar}
              alt={`Avatar de ${name}`}
              className="w-20 h-20 rounded-full object-cover mx-auto mb-6 shadow-md"
              loading="lazy"
            />
            
            <p className="text-gray-700 text-lg italic text-center mb-6 flex-grow leading-relaxed">
              "{quote}"
            </p>
            
            <footer className="text-center">
              <div className="font-semibold text-gray-900 text-lg">{name}</div>
              <div className="text-gray-600 text-sm">{title}</div>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </>
  );
}
export default TestimonialsSection;