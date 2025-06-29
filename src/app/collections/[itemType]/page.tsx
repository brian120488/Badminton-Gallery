import Item from './components/Item';

export default async function ItemPage({ params, }: { params: Promise<{ itemType: string }> }) {
  const { itemType } = await params;
  console.log(itemType);
  return (
    <>
      <div>Item Type: {itemType}</div>
      <Item image='/' name='Sample Item' price={100} />
    </>
  );
}