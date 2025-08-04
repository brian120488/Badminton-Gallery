'use client';

import { useItemContext } from '../../contexts/ItemContext';

export default function StringSelector() {
  const { item, updateItem } = useItemContext();
  const string = item.selection.string;

  const strings = [
    'No String', 
    'BG 65 (Black)',
    'BG 65 (Yellow)',
    'BG 65 Ti (Red)',

    'BG 66 (Black)',
    'BG 66 (Blue)',
    'BG 66 (Pink)',
    'BG 66 (Orange)',

    'BG 80 (Blue)',
    'BG 80 (Pink)',
    'BG 80 (Neon Yellow)',
    'BG 80 Power (Orange)',

    'Nanogy 95 (Blue)',
    'Nanogy 95 (Neon Green)',

    'Nanogy 98 (Blue)',
    'Nanogy 98 (Beige)',
    'Nanogy 98 (Yellow)',

    'Exbolt 63 (Blue)',
    'Exbolt 63 (Red)',
    'Exbolt 63 (Black)',
    'Exbolt 63 (Neon Green)',

    'Exbolt 65 (Red)',
    'Exbolt 65 (Green)',
    'Exbolt 65 (Blue)',

    'Exbolt 68 (Blue)',
    'Exbolt 68 (Green)',
    'Exbolt 68 (Neon Yellow)',
    'Exbolt 68 (Red)',

    'VBS-61 (Pink)',
    'VBS-61 (Blue)',
    'VBS-66 Nano (Green)',
    'VBS-66 Nano (Turquoise)',

    'Aerobite (Red/White)',
    'Aerobite Boost (Red/Black)',
    'Aerobite Boost (Neon Yellow/Black)',
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