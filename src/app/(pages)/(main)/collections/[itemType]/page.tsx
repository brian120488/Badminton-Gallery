import ItemListWrapper from './components/ItemListWrapper'
import { getProductsByType } from '@/lib/aws/dynamo'
import { getProductImages } from '@/lib/aws/s3';
import { Construction } from 'lucide-react';

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
    <>
      {itemType == 'racket' &&
        <div className='mx-2 md:mx-16 pb-16'>
          <span className="block text-4xl font-bold text-gray-800 mt-8 mb-4">
            {itemType.charAt(0).toUpperCase() + itemType.slice(1)}
          </span>
          <ItemListWrapper itemType={itemType} items={itemsWithImages} />
        </div>
      }

      {itemType != 'racket' &&
        <div className='flex items-center gap-3 p-4 mx-96 my-8 border border-amber-400 rounded-md bg-amber-50'>
          <Construction className='text-amber-500' size={24} />
          <p className='text-sm text-amber-900 m-0'>
            We are currently only selling rackets online. Other items will be available for sale online later.
          </p>
        </div>
      }
    </>
  );
}
