'use client'

import ColorSelector from './ColorSelector'
import WeightGripSelector from './WeightGripSelector'
import StringSelector from './StringSelector'
import TensionSelector from './TensionSelector'
import { useItemContext } from '../../contexts/ItemContext'

export default function SpecsSelector() {
  const { item } = useItemContext();

   return (
    <>
      {item.type === 'racket' && (
        <>
          <ColorSelector colors={item.specs.colors} />
          <WeightGripSelector options={item.specs.weight_grip} />
          <StringSelector />
          { item.selection.string && <TensionSelector /> }
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
    </>
  );
}