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
            className={`
              px-5 py-3 rounded-md border text-gray-700
              cursor-pointer transition-colors duration-300 ease-in-out
              ${weight_grip === option
                ? 'border-blue-400'
                : 'border-gray-300 hover:border-blue-400'}
              focus:outline-none
            `}
          >{option}</button>
        ))}
      </div>
    </>
  );
}