'use client';

import type { Product, ProductVariant } from '@/lib/types';
import React, from 'react';
import type { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';

interface CartItem extends Product {
  quantity: number;
  variant: ProductVariant;
}

interface CartState {
  items: CartItem[];
}

interface CartContextType {
  cart: CartState;
  addToCart: (product: Product, variant: ProductVariant) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  isCartAnimating: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartState>({ items: [] });
  const [isCartAnimating, setIsCartAnimating] = useState(false);

  const addToCart = (product: Product, variant: ProductVariant) => {
    setCart((prevCart) => {
      // Unique ID for a cart item is product.id + variant.id
      const cartItemId = product.id + variant.id;
      const existingItemIndex = prevCart.items.findIndex(
        (item) => (item.id + item.variant.id) === cartItemId
      );

      if (existingItemIndex > -1) {
        const newItems = [...prevCart.items];
        newItems[existingItemIndex].quantity += 1;
        return { items: newItems };
      } else {
        const newItem: CartItem = { 
          ...product,
          quantity: 1,
          variant: variant
        };
        return { items: [...prevCart.items, newItem] };
      }
    });

    setIsCartAnimating(true);
    setTimeout(() => setIsCartAnimating(false), 1000); // Animation duration
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => ({
      ...prevCart,
      items: prevCart.items.filter(item => (item.id + item.variant.id) !== itemId)
    }));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart((prevCart) => ({
      ...prevCart,
      items: prevCart.items.map(item => 
        (item.id + item.variant.id) === itemId ? { ...item, quantity } : item
      )
    }));
  };

  const clearCart = () => {
    setCart({ items: [] });
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, isCartAnimating, removeFromCart, updateQuantity, clearCart }}>
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
