'use client'

import ColorSelector from './selectors/ColorSelector'
import WeightGripSelector from './selectors/WeightGripSelector'
import StringSelector from './selectors/StringSelector'
import TensionSelector from './selectors/TensionSelector'
import { useItemContext } from '../contexts/ItemContext'

export default function SpecsSelector() {
  const { item } = useItemContext();

   return (
    <>
      {item.type === 'racket' && (
        <>
          <ColorSelector colors={item.specs.colors} />
          <WeightGripSelector options={item.specs.weight_grip} />
          <StringSelector />
          { item.selection.string && !item.selection.string.startsWith("No String") && <TensionSelector /> }
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