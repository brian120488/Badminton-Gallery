'use client';

import { useItemContext } from '../ItemContext';

export default function StringSelector() {
  const { item, updateItem } = useItemContext();
  const string = item.selection.string;

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
        value={string ?? ''}
        onChange={(e) => updateItem({
          selection: {
            'string': e.target.value
          }
        })}
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