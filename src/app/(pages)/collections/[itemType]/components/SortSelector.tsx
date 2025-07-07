interface Props {
  sort: string
  setSort: (sort: string) => void
}

export default function SortSelector({ sort, setSort }: Props) {
  return (
    <div className="mb-4">
      <label htmlFor="sort" className="mr-2 font-semibold">Sort by:</label>
      <select
        id="sort"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border rounded px-2 py-1"
      >
        <option value="featured">Featured</option>
        <option value="name">Name</option>
        <option value="newest">Newest</option>
        <option value="price-low-high">Price: Low to High</option>
        <option value="price-high-low">Price: High to Low</option>
      </select>
    </div>
  )
}
