'use client'

import { useState, Suspense } from 'react'
import ItemList from './ItemList'
import ItemListSkeleton from './ItemListSkeleton'
import SortSelector from './SortSelector'
import { Item } from '@/types/types'

interface Props {
  itemType: string
  items: Item[]
}

export default function ItemsListWrapper({ items }: Props) {
  const [sort, setSort] = useState('featured');

  return (
    <>
      <SortSelector sort={sort} setSort={setSort} />

      <Suspense fallback={<ItemListSkeleton />}>
        <div className="animate-fade-in">
          <ItemList items={items} sort={sort} />
        </div>
      </Suspense>
    </>
  )
}
