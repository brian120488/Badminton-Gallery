'use client';

import { useItemContext } from '../../contexts/ItemContext';
import { useState, useEffect } from 'react';

export default function QuantitySelector() {
  const { item, updateItem } = useItemContext();
  const quantity = item.quantity;

  // Local state for input field
  const [tempQuantity, setTempQuantity] = useState(quantity.toString());

  // Keep tempQuantity in sync if quantity changes externally
  useEffect(() => {
    setTempQuantity(quantity.toString());
  }, [quantity]);

  const decrease = () => {
    if (quantity > 1) updateItem({ quantity: quantity - 1 });
  };

  const increase = () => {
    updateItem({ quantity: quantity + 1 });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempQuantity(e.target.value);
  };

  const handleBlur = () => {
    const value = parseInt(tempQuantity, 10);
    if (!isNaN(value) && value >= 1) {
      updateItem({ quantity: value });
    } else {
      updateItem({ quantity: 1 });
    }
  };

  return (
    <div className='flex items-center'>
      <button
        onClick={decrease}
        disabled={quantity === 1}
        className={`w-10 h-12 flex items-center justify-center border text-lg rounded-l-sm
          ${
            quantity === 1
              ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'border-gray-300 hover:bg-gray-100 text-gray-800 cursor-pointer'
          }
        `}
      >
        −
      </button>

      <input
        type='number'
        min={1}
        value={tempQuantity}
        onChange={handleInputChange}
        onBlur={handleBlur}
        className='size-12 text-center text-gray-800 text-base font-medium border border-gray-300'
      />

      <button
        onClick={increase}
        className='w-10 h-12 flex items-center justify-center border border-gray-300 hover:bg-gray-100 text-lg text-gray-800 cursor-pointer rounded-r-sm'
      >
        +
      </button>
    </div>
  );
}
