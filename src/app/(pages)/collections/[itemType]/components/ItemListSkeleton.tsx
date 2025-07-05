import ItemCardSkeleton from './ItemCardSkeleton'

export function ItemListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-32 justify-evenly items-center">
      <ItemCardSkeleton />
      <ItemCardSkeleton />
      <ItemCardSkeleton />
    </div>
  );
}