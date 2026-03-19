import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
import { useCart } from '../../context/CartContext';
import toast from 'react-hot-toast';

const QuickViewModal = ({ isOpen, onClose, product }) => {
  const { addToCart } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
    onClose();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all">
                <div className="relative">
                  <button
                    onClick={onClose}
                    className="absolute right-4 top-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>

                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Product Image */}
                    <div className="bg-gray-100 p-8 flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-auto max-h-96 object-contain"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="p-8">
                      <Dialog.Title className="text-2xl font-bold text-gray-900 mb-2">
                        {product.name}
                      </Dialog.Title>

                      <div className="flex items-center mb-4">
                        <span className="text-3xl font-bold text-primary-600">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="ml-3 text-lg text-gray-400 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>

                      <div className="mb-6">
                        <p className="text-gray-700 leading-relaxed">{product.description}</p>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex">
                          <span className="w-24 font-semibold text-gray-600">Category:</span>
                          <span className="text-gray-800 capitalize">{product.category}</span>
                        </div>
                        <div className="flex">
                          <span className="w-24 font-semibold text-gray-600">Material:</span>
                          <span className="text-gray-800 capitalize">{product.material}</span>
                        </div>
                        <div className="flex">
                          <span className="w-24 font-semibold text-gray-600">Dimensions:</span>
                          <span className="text-gray-800">{product.dimensions}</span>
                        </div>
                        <div className="flex">
                          <span className="w-24 font-semibold text-gray-600">Color:</span>
                          <span className="text-gray-800">{product.color}</span>
                        </div>
                        <div className="flex">
                          <span className="w-24 font-semibold text-gray-600">Stock:</span>
                          <span className={product.inStock ? 'text-green-600' : 'text-red-600'}>
                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                          </span>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button
                          onClick={handleAddToCart}
                          disabled={!product.inStock}
                          className="flex-1 bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                          <ShoppingBagIcon className="h-5 w-5" />
                          Add to Cart
                        </button>
                        <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                          <HeartIcon className="h-5 w-5 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default QuickViewModal;