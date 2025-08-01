'use client' // used for sorting

import { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import type { Item } from '@/types/types'

interface Props {
  items: Item[]
  sort: string
}

export default function ItemList({ items, sort }: Props) {
  const [arr, setItems] = useState<Item[]>(items);

  useEffect(() => {
    async function sortItems(sort: string) {
      const sortedItems = arr.slice();
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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-evenly items-start">
      {arr.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
        />
      ))}
    </div>
  )
}
