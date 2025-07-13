'use client';

import { useItemContext } from '../ItemContext';

interface Props {
  colors: string[];
}

export default function ColorSelector({ colors }: Props) {
  const { item, updateItem } = useItemContext();
  const color = item.selection.color;
  
  return (
    <>
      Color: {color}
      <div className='flex gap-3'>
        {colors.map((c) => (
          <button
            key={c}
            onClick={() => updateItem({
              selection: {
                'color': c
              }
            })}
            className={`w-8 h-8 rounded-full border-2 ${color === c ? 'border-black' : 'border-gray-300'}`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </>
  );
}