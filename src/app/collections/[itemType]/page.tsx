import ItemList from './components/ItemList';

export default async function ItemsPage({ params }: { params: Promise<{ itemType: string }> }) {
  const { itemType } = await params;

  return (
    <>
      <span>Item Type: {itemType}</span>
      <ItemList itemType={itemType} />
    </>
  );
}