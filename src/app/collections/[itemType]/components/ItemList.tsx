import React from 'react';
import ItemCard from './ItemCard'; 
import type { Item } from '@/types/types'; 


async function fetchItems(itemType: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/collections/${itemType}`, { cache: 'no-store' });
    const data = await res.json();
    return data.items;
  } catch (error) {
    console.error('Error fetching items:', error);
  }
}

export default async function ItemList({ itemType }: { itemType: string }) {
  const items: Item[] = await fetchItems(itemType);

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
