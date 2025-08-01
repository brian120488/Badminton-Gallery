'use client';

import { createContext, useContext, useState } from 'react';
import type { RacketItem, Item, Selection } from '@/types/types';

interface ItemContextType {
  item: Item;
  updateItem: (updates: Partial<Item>) => void;
  isSelectionComplete: (item: Item) => boolean;
}

const ItemContext = createContext<ItemContextType | null>(null);

export function useItemContext() {
  const ctx = useContext(ItemContext);
  if (!ctx) throw new Error('useItemContext must be used within ItemProvider');
  return ctx;
}

export function ItemProvider({
  initialItem,
  children,
}: {
  initialItem: Item;
  children: React.ReactNode;
}) {
  // Define default selection per item type
  const defaultSelection: Selection = (() => {
    if (initialItem.type === 'racket') {
      const racketItem = initialItem as RacketItem;
      return {
        color: racketItem.specs.colors[0],
        weight_grip: racketItem.specs.weight_grip[0],
        string: '',
        tension: 0,
      };
    }
    return {};
  })();

  const [item, setItem] = useState<Item>({
    ...initialItem,
    quantity: 1,
    selection: {
      ...defaultSelection,
      ...initialItem.selection, // overwrite defaults with anything passed in
    },
  } as Item);

  const updateItem = (updates: Partial<Item>) => {
    setItem((prev) => ({
      ...prev,
      ...updates,
      selection: {
        ...(prev.selection ?? {}),
        ...(updates.selection ?? {}),
      },
    }) as Item);
  };

  const isSelectionComplete = (item: Item): boolean => {
    if (item.type === 'racket') {
      const sel = item.selection as Selection;
      return (
        !!sel.color &&
        !!sel.weight_grip &&
        !!sel.string
      );
    }
    // TODO: do other items
    return true;
  };

  return (
    <ItemContext.Provider value={{ item, updateItem, isSelectionComplete }}>
      {children}
    </ItemContext.Provider>
  );
}
