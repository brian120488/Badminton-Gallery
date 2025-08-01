'use client';

import { useItemContext } from '../../contexts/ItemContext';

export default function StringSelector() {
  const { item, updateItem } = useItemContext();
  const string = item.selection.string;

  const strings = [
    'No String', 
    'Yonex BG65',
    'Yonex BG65 Ti',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedString = e.target.value;
    const tension = selectedString == strings[0] ? undefined : item.selection.tension;

    updateItem({
      selection: {
        string: selectedString,
        tension: tension,
      },
    });
  };
  
  return (
    <div>
      <label htmlFor='string'>String: </label>
      <select
        id='string'
        value={string ?? ''}
        onChange={handleChange}
      >
        <option value='' disabled>
          Select a string
        </option>
        {strings.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );
}