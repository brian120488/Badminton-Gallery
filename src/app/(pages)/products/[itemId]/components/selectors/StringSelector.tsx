import TensionSelector from './TensionSelector'

interface Props {
  selected: string;
  onSelect: (stringName: string) => void;
}

export default function StringSelector({ selected, onSelect }: Props) {
  const strings = new Map([
    ['No String', 0],
    ['Yonex BG65', 30],
    ['Yonex BG65 Ti', 33],
  ]);
  
  return (
    <div>
      <label htmlFor='string'>String: </label>
      <select
        id='string'
        value={selected ?? ''}
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value='' disabled>
          Select a string
        </option>
        {[...strings.keys()].map((name) => (
          <option key={name} value={name}>
            {name} - ${strings.get(name)}
          </option>
        ))}
      </select>
    </div>
  );
}