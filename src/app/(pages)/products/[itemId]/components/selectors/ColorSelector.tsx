interface Props {
  colors: string[];
  selected: string;
  onSelect: (color: string) => void;
}

export default function ColorSelector({ colors, selected, onSelect }: Props) {
  return (
    <>
      Color: {selected}
      <div className='flex gap-3'>
        {colors.map((color) => (
          <button
            key={color}
            type='button'
            onClick={() => onSelect(color)}
            className={`w-8 h-8 rounded-full border-2 focus:outline-none
              ${selected === color ? 'border-black' : 'border-gray-300'}`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </>
  );
}