import { getProductsByIdContains } from '@/lib/aws/dynamo'
import { getProductImages } from '@/lib/aws/s3'
import ItemListWrapper from './[itemType]/components/ItemListWrapper'
import { Construction } from 'lucide-react'

export default async function CollectionsPage({
  searchParams,
}: {
  searchParams: Promise<{ s?: string }>
}) {
  const search = (await searchParams).s as string;
  const items = await getProductsByIdContains(search);
  const itemsWithImages = await Promise.all(
    items.map(async (item) => {
      const images = await getProductImages(item)
      return { ...item, images }
    })
  )

  return (
    <>
      {itemsWithImages.length > 0 ? (
        <div className="mx-16 pb-16">
          <span className="block text-4xl font-bold text-gray-800 mt-8 mb-4 capitalize">
            {search}
          </span>
          <ItemListWrapper itemType="racket" items={itemsWithImages} />
        </div>
      ) : (
        <div className="flex items-center gap-3 p-4 mx-96 my-8 border border-amber-400 rounded-md bg-amber-50">
          <Construction className="text-amber-500" size={24} />
          <p className="text-sm text-amber-900 m-0">
            No products found for the name &quot;{search}.
          </p>
        </div>
      )}
    </>
  )
}
