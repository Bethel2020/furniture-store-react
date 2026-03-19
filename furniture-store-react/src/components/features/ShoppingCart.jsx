import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, TrashIcon } from '@heroicons/react/24/outline';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import { useCart } from '../../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const ShoppingCart = () => {
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity,
    getCartTotal 
  } = useCart();

  return (
    <Transition show={isCartOpen} as={Fragment}>
      <Dialog onClose={() => setIsCartOpen(false)} className="relative z-50">
        {/* Backdrop */}
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

        {/* Cart Panel */}
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    {/* Header */}
                    <div className="flex items-start justify-between p-6">
                      <Dialog.Title className="text-lg font-medium text-gray-900">
                        Shopping Cart ({cartItems.length} items)
                      </Dialog.Title>
                      <button
                        onClick={() => setIsCartOpen(false)}
                        className="rounded-md bg-white text-gray-400 hover:text-gray-500"
                      >
                        <XMarkIcon className="h-6 w-6" />
                      </button>
                    </div>

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto px-6">
                      <AnimatePresence>
                        {cartItems.length === 0 ? (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-12"
                          >
                            <p className="text-gray-500">Your cart is empty</p>
                          </motion.div>
                        ) : (
                          <div className="space-y-6">
                            {cartItems.map((item) => (
                              <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="flex gap-4"
                              >
                                {/* Product Image */}
                                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                {/* Product Details */}
                                <div className="flex flex-1 flex-col">
                                  <div className="flex justify-between">
                                    <div>
                                      <h3 className="text-sm font-medium text-gray-900">
                                        {item.name}
                                      </h3>
                                      <p className="mt-1 text-sm text-gray-500">
                                        ${item.price}
                                      </p>
                                    </div>
                                    <button
                                      onClick={() => removeFromCart(item.id)}
                                      className="text-gray-400 hover:text-red-500"
                                    >
                                      <TrashIcon className="h-5 w-5" />
                                    </button>
                                  </div>

                                  {/* Quantity Controls */}
                                  <div className="mt-2 flex items-center gap-2">
                                    <button
                                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                      className="rounded-full bg-gray-100 p-1 hover:bg-gray-200"
                                    >
                                      <MinusIcon className="h-4 w-4" />
                                    </button>
                                    <span className="w-8 text-center text-sm">
                                      {item.quantity}
                                    </span>
                                    <button
                                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                      className="rounded-full bg-gray-100 p-1 hover:bg-gray-200"
                                    >
                                      <PlusIcon className="h-4 w-4" />
                                    </button>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Footer */}
                    {cartItems.length > 0 && (
                      <div className="border-t border-gray-200 p-6">
                        <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                          <p>Subtotal</p>
                          <p>${getCartTotal().toFixed(2)}</p>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <button className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                          Checkout
                        </button>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ShoppingCart;