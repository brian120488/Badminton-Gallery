import Image from 'next/image';

interface ItemProps {
  image: string;
  name: string;
  price: number;
}

const ItemCard = ({image, name, price} : ItemProps) => {
  return (
    <>
      <Image 
        src={image}
        alt={name}
        width={300}
        height={300}
        className='object-cover'>
      </Image>
      <h1>{price}</h1>
    </>
  );
}

export default ItemCard;