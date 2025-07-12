interface Props {
  selected: number;
  onSelect: (tension: number) => void;
}

export default function TensionSelector({ selected, onSelect }: Props) {
  const tensions = Array.from({ length: 11 }, (_, i) => 20 + i); // 20-30
  
  return (
    <div className="w-48">
      <label htmlFor="tension-select" className="block mb-2 font-medium text-gray-700">
        Tension (lbs)
      </label>
      <select
        id="tension-select"
        value={selected ?? ''}
        onChange={(e) => onSelect(Number(e.target.value))}
        className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3
                   shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200
                   focus:ring-opacity-50"
      >
        <option value="" disabled>
          Select tension
        </option>
        {tensions.map((tension) => (
          <option key={tension} value={tension}>
            {tension} lbs
          </option>
        ))}
      </select>

      {selected && (
        <p className="mt-3 text-sm text-gray-700">
           tension: <span className="font-semibold">{selected} lbs</span>
        </p>
      )}
    </div>
  );
}