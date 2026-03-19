import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FunnelIcon } from '@heroicons/react/24/outline';
import ProductCard from '../components/features/ProductCard';
import FilterSidebar from '../components/features/FilterSidebar';
import QuickViewModal from '../components/features/QuickViewModal';
import { products, categories, materials, rooms } from '../data/products';

const ShopPage = () => {
  const [filters, setFilters] = useState({
    category: 'all',
    material: 'all',
    room: 'all',
    priceRange: null
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [sortBy, setSortBy] = useState('featured');

  // Filter products based on selected filters
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Category filter
      if (filters.category !== 'all' && product.category !== filters.category) {
        return false;
      }
      
      // Material filter
      if (filters.material !== 'all' && product.material !== filters.material) {
        return false;
      }
      
      // Room filter
      if (filters.room !== 'all' && product.room !== filters.room) {
        return false;
      }
      
      // Price range filter
      if (filters.priceRange) {
        if (product.price < filters.priceRange.min || product.price > filters.priceRange.max) {
          return false;
        }
      }
      
      return true;
    });
  }, [filters]);

  // Sort products
  const sortedProducts = useMemo(() => {
    const productsToSort = [...filteredProducts];
    
    switch (sortBy) {
      case 'price-low':
        return productsToSort.sort((a, b) => a.price - b.price);
      case 'price-high':
        return productsToSort.sort((a, b) => b.price - a.price);
      case 'name-asc':
        return productsToSort.sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return productsToSort.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return productsToSort;
    }
  }, [filteredProducts, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Shop Furniture</h1>
          
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm"
            >
              <FunnelIcon className="h-5 w-5" />
              Filters
              {Object.values(filters).filter(f => f && f !== 'all').length > 0 && (
                <span className="bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {Object.values(filters).filter(f => f && f !== 'all').length}
                </span>
              )}
            </button>

            {/* Results count */}
            <p className="text-gray-600">
              Showing {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'}
            </p>

            {/* Sort dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            categories={categories}
            materials={materials}
            rooms={rooms}
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
          />

          {/* Product Grid */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {sortedProducts.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12"
                >
                  <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {sortedProducts.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onQuickView={setQuickViewProduct}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        product={quickViewProduct}
      />
    </div>
  );
};

export default ShopPage;