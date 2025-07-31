interface Props {
  sort: string;
  setSort: (sort: string) => void;
}

export default function SortSelector({ sort, setSort }: Props) {
  return (
    <div className='mb-6 flex items-center gap-3'>
      <label htmlFor='sort' className='text-sm font-medium text-gray-700'>
        Sort by:
      </label>
      <select
        id='sort'
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className='rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'
      >
        <option value='featured'>Featured</option>
        <option value='name'>Name</option>
        <option value='newest'>Newest</option>
        <option value='price-low-high'>Price: Low to High</option>
        <option value='price-high-low'>Price: High to Low</option>
      </select>
    </div>
  );
}
