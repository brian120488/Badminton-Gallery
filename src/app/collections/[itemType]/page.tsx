import ItemCard from './components/ItemCard';

interface ItemProps {
  image: string;
  name: string;
  price: number;
}

async function fetchItems(itemType: string): Promise<ItemProps[]> {
  try {
    const res = await fetch(`http://localhost:3000/api/collections/${itemType}`);

    console.log("done");
    const data = await res.json();
    console.log("done");

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
        // <ItemCard
        //   key={item.name}
        //   image={item.image}
        //   name={item.name}
        //   price={item.price}
        // />
          <div key={item.name}>
            <h1>{item.name}</h1>
            <p>{item.price}</p>
          </div>
      ))}
    </>
  );
}