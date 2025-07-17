'use client';

import { useItemContext } from '../../contexts/ItemContext';

interface Props {
  options: string[];
}

export default function WeightGripSelector({ options }: Props) {
  const { item, updateItem } = useItemContext();
  const weight_grip = item.selection.weight_grip;
  
  return (
    <>
      Weight and Grip Size: {weight_grip}
      <div className='flex gap-3'>
        {options.map((option) => (
          <button
            key={option}
            type='button'
            onClick={() => updateItem({
              selection: {
                'weight_grip': option
              }
            })}
            className={`p-4 rounded-sm border border-gray-200 hover:border-blue-500 cursor-pointer
              ${weight_grip === option ? 'bg-blue-500' : 'bg-white'}`}
          >{option}</button>
        ))}
      </div>
    </>
  );
}