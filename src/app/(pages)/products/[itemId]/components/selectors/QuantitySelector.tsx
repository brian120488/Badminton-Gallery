interface Props {
  quantity: number;
  onChange: (newQuantity: number) => void;
}

export default function QuantitySelector({ quantity, onChange }: Props) {
  const decrease = () => {
    if (quantity > 1) 
      onChange(quantity - 1);
  };

  const increase = () => {
    onChange(quantity + 1);
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={decrease}
        disabled={quantity === 1}
        className={`w-8 h-8 flex items-center justify-center rounded border text-lg
          ${quantity === 1
            ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'border-gray-300 hover:bg-gray-100 text-gray-800 cursor-pointer'}
        `}
      >
        −
      </button>

      <span className="w-8 text-center text-gray-800 text-base font-medium">
        {quantity}
      </span>

      <button
        onClick={increase}
        className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100 text-lg text-gray-800 cursor-pointer"
      >
        +
      </button>
    </div>
  );
}