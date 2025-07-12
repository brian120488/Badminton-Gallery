
import { addItem } from '@/lib/redux/cart/cartSlice';
import { useAppDispatch } from '@/lib/redux/store'
import type { Item } from '@/types/types'

interface Props {
  item: Item;
  selection: Item['selection'];
  quantity: Item['quantity'];
}

export default function AddToCartButton({ item, selection, quantity }: Props) {
  const dispatch = useAppDispatch();
  
  const addToCartHandler = () => {
    item.selection = selection;
    item.quantity = quantity;
    dispatch(addItem(item));
  };

  return (
    <button 
      className='mt-2 border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white cursor-pointer'
      onClick={addToCartHandler}
    >
      Add to Cart
    </button>
  );
}
