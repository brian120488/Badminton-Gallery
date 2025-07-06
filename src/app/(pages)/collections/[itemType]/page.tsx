import ItemListWrapper from './components/ItemListWrapper'

export default async function ItemsPage({ params }: { params: Promise<{ itemType: string }> }) {
  const { itemType } = await params

  return (
    <>
      <span className="block text-4xl font-bold text-gray-800 mx-32 mt-8 mb-4">
        {itemType.charAt(0).toUpperCase() + itemType.slice(1)}
      </span>
      <ItemListWrapper itemType={itemType} />
    </>
  );
}
