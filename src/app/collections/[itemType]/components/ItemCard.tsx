import Image from 'next/image';

const ItemCard = ({image, name, price} : Item) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <div className="relative w-full h-90 rounded p-4">
        <Image
          src={image}
          alt={name}
          fill={true}
          className="object-cover"
        />
      </div>
      <h1 className="mt-2">{name}</h1>
      <h1>${price}</h1>
    </div>
  );
}

export default ItemCard;