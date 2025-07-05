import ItemList from './components/ItemList';
import { Suspense } from 'react';

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default async function ItemsPage({ params }: { params: Promise<{ itemType: string }> }) {
  const { itemType } = await params;

  return (
    <>
      <span className="block text-4xl font-bold text-gray-800 mx-32 mt-8 mb-4">{capitalize(itemType)}</span>
      <Suspense fallback={<p>LOADING</p>}>
        <ItemList itemType={itemType} />
      </Suspense>
    </>
  );
}