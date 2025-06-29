import Image from 'next/image';

const ItemCard = ({image, name, price} : Item) => {
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