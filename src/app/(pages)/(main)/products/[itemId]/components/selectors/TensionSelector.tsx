'use client';

import { useItemContext } from '../../contexts/ItemContext';
import { useEffect } from 'react';
import { useState } from 'react';

export default function TensionSelector() {
  const { item, updateItem } = useItemContext();
  const tensions = Array.from({ length: 11 }, (_, i) => 20 + i); // 20-30
  
  const initialTension = item.selection.tension || 20;
  const [currTension, setCurrTension] = useState(initialTension);

  useEffect(() => {
    if (!item.selection.tension) {
      updateItem({
        selection: {
          tension: initialTension,
        },
      });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const tension = Number(e.target.value);
    setCurrTension(tension);
    updateItem({
      selection: {
        tension,
      },
    });
  };
  
  return (
    <div className="w-48">
      <label htmlFor="tension-select" className="block mb-2 font-medium text-gray-700">
        Tension (lbs)
      </label>
      <select
        id="tension-select"
        value={currTension}
        onChange={handleChange}
        className="w-60 px-2 py-1 border border-gray-300 rounded-md"
      >
        <option value="" disabled>
          Select tension
        </option>
        {tensions.map((tension) => (
          <option key={tension} value={tension}>
            {tension} lbs
          </option>
        ))}
      </select>
    </div>
  );
}