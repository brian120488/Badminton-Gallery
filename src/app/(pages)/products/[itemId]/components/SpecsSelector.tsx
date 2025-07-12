'use client'

import type { Item } from '@/types/types'
import { useState } from 'react';
import ColorSelector from './selectors/ColorSelector'
import WeightGripSelector from './selectors/WeightGripSelector'
import StringSelector from './selectors/StringSelector'
import TensionSelector from './selectors/TensionSelector'
import QuantitySelector from './selectors/QuantitySelector';
import AddToCartButton from './AddToCartButton'

export default function SpecsSelector({ item }: { item: Item }) {
  const [quantity, setQuantity] = useState(1);
  const [selection, setSelection] = useState<Item['selection']>(() => {
    switch (item.type) {
      case 'racket':
        return {
          color: item.specs.colors[0],
          weight_grip: item.specs.weight_grip[0],
          string: '',
          tension: 0,
        };
      // case 'bag':
      //   return {
      //     color: item.specs.colors[0],
      //   };
      default:
        return {};
    }
  });

  const update = <K extends string>(key: K, value: any) => {
    setSelection((prev: any) => ({ ...prev, [key]: value }));
  };

   return (
    <>
      {item.type === 'racket' && (
        <>
          <ColorSelector
            colors={item.specs.colors}
            selected={selection.color}
            onSelect={(c) => update('color', c)}
          />
          <WeightGripSelector
            options={item.specs.weight_grip}
            selected={selection.weight_grip}
            onSelect={(wg) => update('weight_grip', wg)}
          />
          <StringSelector
            selected={selection.string}
            onSelect={(s) => update('string', s)}
          />
          { selection.string && 
              <TensionSelector
              selected={selection.tension}
              onSelect={(t) => update('tension', t)}
            />
          }
          
        </>
      )}

      {/* {item.type === 'bag' && (
        <ColorSelector
          colors={item.specs.colors}
          selected={selection.color}
          onSelect={(c) => update('color', c)}
        />
      )} */}

      {/* Add cases for other item types here */}

      <QuantitySelector
        quantity={quantity}
        onChange={setQuantity}
      />

      <AddToCartButton
        item={item}
        selection={selection}
        quantity={quantity}
      />
    </>
  );
}