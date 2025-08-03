'use client';

import { useEffect } from 'react';

import { useAppDispatch } from '@/lib/redux/store';
import { clearCart } from '@/lib/redux/cart/cartSlice';

export default function ClearCartClient() {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(clearCart());
  }, []);

  return null; // nothing is rendered
}