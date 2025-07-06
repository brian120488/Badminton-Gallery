'use client'

import { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import type { Item } from '@/types/types'

interface Props {
  itemType: string
  sort: string
}

export default function ItemList({ itemType, sort }: Props) {
  const [items, setItems] = useState<Item[]>([])

  useEffect(() => {
    async function loadItems() {
      try {
        const url = process.env.NEXT_PUBLIC_BASE_URL;
        const res = await fetch(`${url}/api/collections/${itemType}`);
        const data = await res.json();
        setItems(data.items)
      } catch (err) {
        console.error('Error fetching items:', err)
      }
    }
    loadItems();
  }, []);

  useEffect(() => {
    async function sortItems(sort: string) {
      const sortedItems = items.slice();
      if (sort === 'price-low-high') {
        sortedItems.sort((a: Item, b: Item) => a.price - b.price);
      } else if (sort === 'price-high-low') {
        sortedItems.sort((a: Item, b: Item)  => b.price - a.price);
      } else if (sort === 'name') {
        sortedItems.sort((a: Item, b: Item)  => a.name.localeCompare(b.name));
      }
      setItems(sortedItems)
    }
      
    sortItems(sort);
  }, [sort]);

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
  )
}
