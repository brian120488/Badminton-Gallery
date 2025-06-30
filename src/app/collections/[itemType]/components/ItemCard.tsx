import Image from 'next/image';

const ItemCard = ({image, name, price} : Item) => {
  return (
    <div className='p-4 border rounded-lg shadow-md'>
      <Image 
        src={image}
        alt={name}
        width={300}
        height={300}
        className='object-cover'>
      </Image>
      <h1>{name}</h1>
      <h1>${price}</h1>
    </div>
  );
}

export default ItemCard;