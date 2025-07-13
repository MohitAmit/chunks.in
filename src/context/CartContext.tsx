'use client';

import type { Product } from '@/lib/types';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

interface CartContextType {
  cart: CartState;
  addToCart: (product: Product) => void;
  isCartAnimating: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartState>({ items: [] });
  const [isCartAnimating, setIsCartAnimating] = useState(false);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.items.findIndex(
        (item) => item.id === product.id && item.variants[0].id === product.variants[0].id
      );

      if (existingItemIndex > -1) {
        const newItems = [...prevCart.items];
        newItems[existingItemIndex].quantity += 1;
        return { items: newItems };
      } else {
        const newItem: CartItem = { ...product, quantity: 1 };
        return { items: [...prevCart.items, newItem] };
      }
    });

    setIsCartAnimating(true);
    setTimeout(() => setIsCartAnimating(false), 1000); // Animation duration
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, isCartAnimating }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
