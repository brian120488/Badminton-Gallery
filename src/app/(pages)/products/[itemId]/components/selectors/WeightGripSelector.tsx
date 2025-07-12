interface Props {
  options: string[];
  selected: string;
  onSelect: (option: string) => void;
}

export default function WeightGripSelector({ options, selected, onSelect }: Props) {
  return (
    <>
      Weight and Grip Size: {selected}
      <div className='flex gap-3'>
        {options.map((option) => (
          <button
            key={option}
            type='button'
            onClick={() => onSelect(option)}
            className={`p-4 rounded-sm border border-gray-200 hover:border-blue-500 cursor-pointer
              ${selected === option ? 'bg-blue-500' : 'bg-white'}`}
            // style={{ backgroundColor: color }}
          >{option}</button>
        ))}
      </div>
    </>
  );
}