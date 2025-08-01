import CartList from "./components/CartList";

export default function CartPage() {
  return (
    <div className='mt-8 mb-4 max-w-5xl mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-6'>Cart Items</h1>
      <CartList />
    </div>
  );
}