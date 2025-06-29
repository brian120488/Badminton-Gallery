import ItemCard from './components/ItemCard';

async function fetchItems(itemType: string): Promise<Item[]> {
  try {
    const res = await fetch(`http://localhost:3000/api/collections/${itemType}`);
    const data = await res.json();
    return data.items;
  } catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
}

export default async function ItemsPage({ params }: { params: Promise<{ itemType: string }> }) {
  const { itemType } = await params;
  const items = await fetchItems(itemType);

  return (
    <>
      <div>Item Type: {itemType}</div>
      {items.map((item) => (
        <ItemCard
          key={item.name}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      ))}
    </>
  );
}