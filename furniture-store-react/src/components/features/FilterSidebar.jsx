import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';

const FilterSidebar = ({ 
  filters, 
  setFilters, 
  categories, 
  materials,
  rooms,
  onClose,
  isOpen 
}) => {
  const [expandedSections, setExpandedSections] = React.useState({
    category: true,
    price: true,
    material: true,
    room: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const priceRanges = [
    { label: 'Under $200', min: 0, max: 200 },
    { label: '$200 - $500', min: 200, max: 500 },
    { label: '$500 - $1000', min: 500, max: 1000 },
    { label: 'Over $1000', min: 1000, max: Infinity }
  ];

  const handleCategoryChange = (categoryId) => {
    setFilters(prev => ({
      ...prev,
      category: prev.category === categoryId ? 'all' : categoryId
    }));
  };

  const handleMaterialChange = (materialId) => {
    setFilters(prev => ({
      ...prev,
      material: prev.material === materialId ? 'all' : materialId
    }));
  };

  const handleRoomChange = (roomId) => {
    setFilters(prev => ({
      ...prev,
      room: prev.room === roomId ? 'all' : roomId
    }));
  };

  const handlePriceRangeChange = (range) => {
    setFilters(prev => ({
      ...prev,
      priceRange: prev.priceRange?.min === range.min && prev.priceRange?.max === range.max
        ? null
        : range
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: 'all',
      material: 'all',
      room: 'all',
      priceRange: null
    });
  };

  const hasActiveFilters = filters.category !== 'all' || 
    filters.material !== 'all' || 
    filters.room !== 'all' || 
    filters.priceRange;

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Filter Sidebar */}
      <motion.aside
        className={`
          fixed lg:sticky top-0 left-0 h-full lg:h-auto
          w-80 bg-white z-50 lg:z-auto
          overflow-y-auto p-6 shadow-lg lg:shadow-none
          transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Filters</h2>
          <div className="flex items-center gap-2">
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-primary-600 hover:text-primary-700"
              >
                Clear all
              </button>
            )}
            <button onClick={onClose} className="lg:hidden">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection('category')}
            className="flex items-center justify-between w-full mb-3"
          >
            <span className="font-medium">Categories</span>
            <ChevronDownIcon className={`h-5 w-5 transform transition-transform ${
              expandedSections.category ? 'rotate-180' : ''
            }`} />
          </button>
          
          <AnimatePresence>
            {expandedSections.category && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="space-y-2 overflow-hidden"
              >
                {categories.map(cat => (
                  <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.category === cat.id}
                      onChange={() => handleCategoryChange(cat.id)}
                      className="rounded text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-sm">{cat.name}</span>
                  </label>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection('price')}
            className="flex items-center justify-between w-full mb-3"
          >
            <span className="font-medium">Price Range</span>
            <ChevronDownIcon className={`h-5 w-5 transform transition-transform ${
              expandedSections.price ? 'rotate-180' : ''
            }`} />
          </button>
          
          <AnimatePresence>
            {expandedSections.price && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="space-y-2 overflow-hidden"
              >
                {priceRanges.map(range => (
                  <label key={range.label} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.priceRange?.min === range.min && 
                               filters.priceRange?.max === range.max}
                      onChange={() => handlePriceRangeChange(range)}
                      className="rounded text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-sm">{range.label}</span>
                  </label>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Materials */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection('material')}
            className="flex items-center justify-between w-full mb-3"
          >
            <span className="font-medium">Materials</span>
            <ChevronDownIcon className={`h-5 w-5 transform transition-transform ${
              expandedSections.material ? 'rotate-180' : ''
            }`} />
          </button>
          
          <AnimatePresence>
            {expandedSections.material && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="space-y-2 overflow-hidden"
              >
                {materials.map(mat => (
                  <label key={mat.id} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.material === mat.id}
                      onChange={() => handleMaterialChange(mat.id)}
                      className="rounded text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-sm">{mat.name}</span>
                  </label>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Rooms */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection('room')}
            className="flex items-center justify-between w-full mb-3"
          >
            <span className="font-medium">Rooms</span>
            <ChevronDownIcon className={`h-5 w-5 transform transition-transform ${
              expandedSections.room ? 'rotate-180' : ''
            }`} />
          </button>
          
          <AnimatePresence>
            {expandedSections.room && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="space-y-2 overflow-hidden"
              >
                {rooms.map(room => (
                  <label key={room.id} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.room === room.id}
                      onChange={() => handleRoomChange(room.id)}
                      className="rounded text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-sm">{room.name}</span>
                  </label>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.aside>
    </>
  );
};

export default FilterSidebar;