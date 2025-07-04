'use client';

import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import type { Item } from '@/types/types';

export default function ItemList({ itemType }: { itemType: string }) {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchItems() {
      try {
        const res = await fetch(`/api/collections/${itemType}`);
        const data = await res.json();
        setItems(data.items);
      } catch (error) {
        console.error('Error fetching items:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchItems();
  }, [itemType]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-32 justify-evenly items-center">
      {items.map((item) => (
        <ItemCard
          key={item.name}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
}
