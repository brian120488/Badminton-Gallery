'use client'

import { useState, Suspense } from 'react'
import ItemList from './ItemList'
import ItemListSkeleton from './ItemListSkeleton'
import SortSelector from './SortSelector'


interface ItemsPageClientWrapperProps {
  itemType: string
}

export default function ItemsPageClientWrapper({ itemType }: ItemsPageClientWrapperProps) {
  const [sort, setSort] = useState('featured');

  return (
    <>
      <SortSelector sort={sort} setSort={setSort} />

      <Suspense fallback={<ItemListSkeleton />}>
        <div className="animate-fade-in">
          <ItemList itemType={itemType} sort={sort} />
        </div>
      </Suspense>
    </>
  )
}
