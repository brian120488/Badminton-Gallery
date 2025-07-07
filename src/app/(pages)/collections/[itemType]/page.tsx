import ItemListWrapper from './components/ItemListWrapper'
import { getProducts } from '@/lib/dynamo'
import { getProductImages } from '@/lib/s3';

export default async function ItemsPage({ params }: { params: Promise<{ itemType: string }> }) {
  const { itemType } = await params;
  const items = await getProducts(itemType);
  const itemsWithImages = await Promise.all(
    items.map(async (item) => {
      const images = await getProductImages(item);
      return {
        ...item,
        images,
      };
    })
  );

  return (
    <>
      <span className="block text-4xl font-bold text-gray-800 mx-32 mt-8 mb-4">
        {itemType.charAt(0).toUpperCase() + itemType.slice(1)}
      </span>
      <ItemListWrapper itemType={itemType} items={itemsWithImages} />
    </>
  );
}
