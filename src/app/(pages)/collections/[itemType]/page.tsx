import ItemListWrapper from './components/ItemListWrapper'
import { getProductsByType } from '@/lib/aws/dynamo'
import { getProductImages } from '@/lib/aws/s3';

export default async function ItemsPage({ params }: { params: Promise<{ itemType: string }> }) {
  const { itemType } = await params;
  const items = await getProductsByType(itemType);
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
    <div className='mx-16 pb-16'>
      <span className="block text-4xl font-bold text-gray-800 mt-8 mb-4">
        {itemType.charAt(0).toUpperCase() + itemType.slice(1)}
      </span>
      <ItemListWrapper itemType={itemType} items={itemsWithImages} />
    </div>
  );
}
