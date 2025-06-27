// File: src/sections/ProductsSection.jsx
import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { PiggyBank, CreditCard, Home, TrendingUp, ArrowRight, Check } from 'lucide-react';
import platinumVisaCard from "../assets/platinum-visa.jpg";
import creditoMarfil from "../assets/heroImage1.webp";
import cuentaMarfil from "../assets/heroImage2.webp";
import fondoInversion from "../assets/heroImage3.webp";

const products = [
	{
		id: 1,
		name: 'Cuenta Marfil Premium',
		description: 'La cuenta que se adapta a tu estilo de vida premium',
		icon: <PiggyBank className="w-8 h-8" />,
		image: cuentaMarfil,
		features: [
			'Tasas de interés competitivas',
			'Sin comisiones de mantenimiento',
			'Acceso fácil vía app móvil',
			'Retiros gratuitos en cajeros mundiales',
		],
		color: 'from-red-500 to-red-700'
	},
	{
		id: 2,
		name: 'Tarjeta Marfil Platinum',
		description: 'Más que una tarjeta, tu llave al mundo premium',
		icon: <CreditCard className="w-8 h-8" />,
		image: platinumVisaCard,
		features: [
			'Hasta 5% de cashback en compras',
			'Protección contra fraude sin responsabilidad',
			'Servicio al cliente prioritario 24/7',
			'Aceptación global sin restricciones',
		],
		color: 'from-black to-gray-800'
	},
	{
		id: 3,
		name: 'Crédito Hipotecario Marfil',
		description: 'Tu hogar soñado, más cerca que nunca',
		icon: <Home className="w-8 h-8" />,
		image: creditoMarfil,
		features: [
			'Tasas fijas preferenciales',
			'Plazos de pago flexibles hasta 30 años',
			'Sin penalización por pago anticipado',
			'Proceso de aprobación rápido',
		],
		color: 'from-red-600 to-red-800'
	},
	{
		id: 4,
		name: 'Fondo de Inversión Marfil',
		description: 'Haz que tu dinero trabaje para ti',
		icon: <TrendingUp className="w-8 h-8" />,
		image: fondoInversion,
		features: [
			'Portafolio diversificado de inversiones',
			'Gestión profesional de activos',
			'Rentabilidad superior al mercado',
			'Transparencia total en movimientos',
		],
		color: 'from-gray-900 to-black'
	},
];

export default function ProductsSection() {
	const [activeProduct, setActiveProduct] = useState(null);
	const [hoveredProduct, setHoveredProduct] = useState(null);

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

	const productVariants = {
		hidden: { 
			opacity: 0,
			scale: 0.8,
			rotateY: -15
		},
		visible: {
			opacity: 1,
			scale: 1,
			rotateY: 0,
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 15
			}
		},
		hover: {
			scale: 1.05,
			rotateY: 10,
			transition: {
				type: "spring",
				stiffness: 400,
				damping: 10
			}
		}
	};

	const featureVariants = {
		hidden: { x: -20, opacity: 0 },
		visible: (i) => ({
			x: 0,
			opacity: 1,
			transition: {
				delay: i * 0.1,
				type: "spring",
				stiffness: 100
			}
		})
	};

	return (
		<section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
			{/* Animated background elements */}
			<motion.div 
				className="absolute inset-0 pointer-events-none"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 2 }}
			>
				<motion.div 
					className="absolute top-20 left-20 w-72 h-72 bg-red-100 rounded-full opacity-20"
					animate={{ 
						scale: [1, 1.2, 1],
						rotation: [0, 180, 360]
					}}
					transition={{ 
						duration: 20,
						repeat: Infinity,
						ease: "linear"
					}}
				/>
				<motion.div 
					className="absolute bottom-20 right-20 w-56 h-56 bg-black/10 rounded-full opacity-30"
					animate={{ 
						scale: [1.2, 1, 1.2],
						x: [0, 50, 0],
						y: [0, -30, 0]
					}}
					transition={{ 
						duration: 15,
						repeat: Infinity,
						ease: "easeInOut"
					}}
				/>
			</motion.div>

			<div className="container mx-auto px-4 relative">
				{/* Header with complex animations */}
				<motion.div 
					className="text-center mb-20"
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
				>
					<motion.h3 
						className="text-5xl lg:text-6xl font-extrabold text-black mb-6"
						initial={{ opacity: 0, scale: 0.5 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						Nuestros Productos
					</motion.h3>
					<motion.div 
						className="w-32 h-1 bg-red-600 mx-auto mb-8 rounded"
						initial={{ scaleX: 0 }}
						whileInView={{ scaleX: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: 0.5 }}
					/>
					<motion.p 
						className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.7 }}
					>
						Productos financieros diseñados para maximizar el valor de tu dinero
					</motion.p>
				</motion.div>

				{/* Products grid with 3D effects */}
				<motion.div 
					className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{products.map((product) => (
						<motion.div
							key={product.id}
							className="group relative"
							variants={productVariants}
							initial="hidden"
							whileInView="visible"
							whileHover="hover"
							viewport={{ once: true }}
							onHoverStart={() => setHoveredProduct(product.id)}
							onHoverEnd={() => setHoveredProduct(null)}
							style={{ perspective: "1000px" }}
						>
							<div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 relative">
								{/* Gradient overlay */}
								<motion.div 
									className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 z-20`}
									animate={{ 
										opacity: hoveredProduct === product.id ? 0.1 : 0 
									}}
									transition={{ duration: 0.3 }}
								/>

								{/* Product image with parallax effect */}
								<div className="relative h-64 overflow-hidden">
									<motion.img
										src={product.image}
										alt={product.name}
										className="w-full h-full object-cover"
										animate={{ 
											scale: hoveredProduct === product.id ? 1.1 : 1,
											rotate: hoveredProduct === product.id ? 2 : 0
										}}
										transition={{ duration: 0.6, ease: "easeOut" }}
									/>
									<motion.div 
										className="absolute inset-0 bg-black/20"
										animate={{ 
											opacity: hoveredProduct === product.id ? 0 : 0.3 
										}}
									/>
								</div>

								{/* Content */}
								<div className="p-8 relative z-10">
									{/* Icon with floating animation */}
									<motion.div 
										className="flex items-center mb-6"
										animate={{ 
											y: hoveredProduct === product.id ? -5 : 0 
										}}
										transition={{ duration: 0.3 }}
									>
										<motion.div 
											className="p-4 bg-red-600 rounded-2xl mr-4 shadow-lg"
											whileHover={{ 
												scale: 1.1,
												rotate: 360,
												backgroundColor: "#dc2626"
											}}
											transition={{ duration: 0.8 }}
										>
											{React.cloneElement(product.icon, { className: 'w-8 h-8 text-white' })}
										</motion.div>
										<div>
											<motion.h4 
												className="text-2xl font-bold text-black mb-2"
												animate={{ 
													color: hoveredProduct === product.id ? "#dc2626" : "#000000" 
												}}
											>
												{product.name}
											</motion.h4>
											<p className="text-gray-600">{product.description}</p>
										</div>
									</motion.div>

									{/* Features with staggered animation */}
									<motion.ul className="space-y-3 mb-8">
										<AnimatePresence>
											{product.features.map((feature, idx) => (
												<motion.li
													key={idx}
													className="flex items-center text-gray-700"
													variants={featureVariants}
													initial="hidden"
													whileInView="visible"
													custom={idx}
													viewport={{ once: true }}
													whileHover={{ x: 10, color: "#000000" }}
												>
													<motion.div
														className="w-2 h-2 bg-red-600 rounded-full mr-4"
														whileHover={{ scale: 1.5 }}
														transition={{ type: "spring", stiffness: 500 }}
													/>
													{feature}
												</motion.li>
											))}
										</AnimatePresence>
									</motion.ul>

									{/* CTA Button with magnetic effect */}
									<motion.button
										className="w-full py-4 px-6 rounded-xl bg-red-600 text-white font-semibold relative overflow-hidden group"
										whileHover={{ 
											scale: 1.02,
											backgroundColor: "#dc2626"
										}}
										whileTap={{ scale: 0.98 }}
										onClick={() => setActiveProduct(activeProduct === product.id ? null : product.id)}
									>
										<motion.span 
											className="relative z-10 flex items-center justify-center"
											animate={{ 
												x: hoveredProduct === product.id ? 5 : 0 
											}}
										>
											Más información
											<motion.div
												animate={{ 
													x: hoveredProduct === product.id ? 5 : 0,
													rotate: hoveredProduct === product.id ? 45 : 0
												}}
											>
												<ArrowRight className="w-5 h-5 ml-2" />
											</motion.div>
										</motion.span>
										
										{/* Animated background */}
										<motion.div
											className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700"
											initial={{ x: "-100%" }}
											whileHover={{ x: 0 }}
											transition={{ duration: 0.3 }}
										/>
									</motion.button>
								</div>

								{/* Expanding details panel */}
								<AnimatePresence>
									{activeProduct === product.id && (
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.4, ease: "easeInOut" }}
											className="bg-gray-50 border-t border-gray-200 overflow-hidden"
										>
											<div className="p-8">
												<h5 className="text-lg font-semibold text-black mb-4">Beneficios adicionales:</h5>
												<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
													{['Asesoría personalizada', 'App móvil exclusiva', 'Promociones especiales', 'Soporte premium'].map((benefit, idx) => (
														<motion.div
															key={idx}
															className="flex items-center text-gray-700"
															initial={{ opacity: 0, x: -20 }}
															animate={{ opacity: 1, x: 0 }}
															transition={{ delay: idx * 0.1 }}
														>
															<Check className="w-4 h-4 text-red-600 mr-2" />
															{benefit}
														</motion.div>
													))}
												</div>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Floating CTA section */}
				<motion.div 
					className="text-center mt-24"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 1 }}
				>
					<motion.div 
						className="bg-white p-12 rounded-3xl shadow-2xl border border-gray-200 max-w-4xl mx-auto relative overflow-hidden"
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.3 }}
					>
						<motion.div 
							className="absolute inset-0 bg-gradient-to-r from-red-50 to-transparent opacity-0"
							whileHover={{ opacity: 100 }}
							transition={{ duration: 0.3 }}
						/>
						<div className="relative z-10">
							<motion.h4 
								className="text-3xl font-bold text-black mb-6"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
							>
								¿Necesitás ayuda para elegir?
							</motion.h4>
							<motion.p 
								className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								transition={{ delay: 0.2 }}
							>
								Nuestros asesores financieros están listos para ayudarte a encontrar el producto perfecto para tus necesidades.
							</motion.p>
							<div className="flex flex-col sm:flex-row gap-6 justify-center">
								<motion.button 
									className="bg-red-600 text-white px-10 py-4 rounded-xl font-semibold shadow-md hover:bg-red-700 transition-all duration-300"
									whileHover={{ scale: 1.05 }}
								>
									Hablar con un asesor
								</motion.button>
								<motion.button 
									className="border-2 border-black text-black px-10 py-4 rounded-xl font-semibold hover:bg-black hover:text-white transition-all duration-300"
									whileHover={{ scale: 1.05 }}
								>
									Comparar productos
								</motion.button>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}