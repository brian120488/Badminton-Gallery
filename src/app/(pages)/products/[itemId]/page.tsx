import { getProductById } from '@/lib/aws/dynamo'
import { getProductImages } from '@/lib/aws/s3';
import Image from 'next/image';
import SpecsSelector from './components/SpecsSelector';

export default async function ItemPage({ params }: { params: Promise<{ itemId: string }> }) {
  const { itemId } = await params;
  const item =  await getProductById(itemId);
  const images = await getProductImages(item);

  return (
    <div className="p-10">
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left: Images - 2/3 width on large screens */}
        <div className="w-full lg:w-2/3">
          <div className="relative aspect-video bg-[#f8f8f8] rounded-md overflow-hidden">
            <Image
              src={images[0]}
              alt="Racket Image"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Right: Specs / Options - 1/3 width on large screens */}
        <div className="w-full lg:w-1/3">
          <div className="space-y-4">
            <div className="text-xl font-bold">Customize</div>
            <div>Name: {item.name}</div>
            <div>Price: ${item.price}</div>

            <SpecsSelector item={item} />
            {/* Add dropdowns, color pickers, etc. here */}
          </div>
        </div>

      </div>
    </div>

  );
}
