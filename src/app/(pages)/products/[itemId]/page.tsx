// import { getProductById } from '@/lib/aws/dynamo'
// import { getProductImages } from '@/lib/aws/s3';

export default async function ItemPage({ params }: { params: Promise<{ itemId: string }> }) {
  const { itemId } = await params;
  // const item = await getProductById(itemId);
  // const images = await getProductImages(item);


  return (
    <>
      {itemId}
    </>
  );
}
