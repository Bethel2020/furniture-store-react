import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const HomePage = () => {
  const categories = [
    {
      name: 'Living Room',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500',
      link: '/shop?room=living-room'
    },
    {
      name: 'Bedroom',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500',
      link: '/shop?room=bedroom'
    },
    {
      name: 'Dining Room',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500',
      link: '/shop?room=dining-room'
    },
    {
      name: 'Office',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500',
      link: '/shop?room=office'
    }
  ];

  const features = [
    {
      title: 'Free Shipping',
      description: 'On orders over $500',
      icon: '🚚'
    },
    {
      title: '24/7 Support',
      description: 'Dedicated customer service',
      icon: '💬'
    },
    {
      title: 'Money Back Guarantee',
      description: '30-day return policy',
      icon: '💰'
    },
    {
      title: 'Secure Payments',
      description: '100% secure transactions',
      icon: '🔒'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative container-custom text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Modern Furniture for Modern Living
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            Discover our collection of contemporary furniture designed to transform your space
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/shop" className="btn-primary inline-flex items-center gap-2">
              Shop Now
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group overflow-hidden rounded-xl aspect-square"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{category.name}</h3>
                  <Link
                    to={category.link}
                    className="text-white inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Shop Now
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of happy customers who've found their perfect furniture with us
          </p>
          <Link to="/shop" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            Start Shopping
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;