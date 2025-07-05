const ItemCard = () => {
  return (
    <div className="p-4 border rounded-lg shadow-md animate-pulse">
      {/* Image Placeholder */}
      <div className="relative w-full aspect-[4/3] bg-gray-200 rounded mb-4" />

      {/* Title Placeholder */}
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />

      {/* Price Placeholder */}
      <div className="h-5 bg-gray-200 rounded w-1/4 mb-4" />

      {/* Button Placeholder */}
      <div className="h-10 bg-gray-300 rounded w-1/2" />
    </div>
  );
}

export default ItemCard;