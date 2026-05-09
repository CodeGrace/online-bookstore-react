import { useCart } from "../context/useCart";
import StockStatus from "../components/StockStatus";

function CartItem({ item }) {
    const { increaseQty, decreaseQty, removeItem } = useCart();

    return (
        <div className="grid grid-cols-2 items-center border-b pb-4">

  {/* LEFT */}
  <div className="flex items-start space-x-4">
    <img
      src={item.image}
      alt={item.title}
      className="w-24 h-auto object-cover"
    />

    <div className="flex flex-col items-start space-y-4">
      <h2 className="text-lg font-semibold">{item.title}</h2>
      <h2 className="text-sm font-semibold">By {item.author}</h2>

        <div className="text-left">
    <StockStatus stock={Number(item.instock)} />
  </div>

      {/* CONTROLS NOW HERE */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => decreaseQty(item.id)}
          className="bg-[#c96d7d] px-2 rounded"
        >
          -
        </button>

        <span>{item.quantity}</span>

        <button
          onClick={() => increaseQty(item.id)}
          disabled={item.quantity >= item.instock}
          className={`px-2 rounded ${
            item.quantity >= item.instock
              ? "bg-[#c96d7d] cursor-not-allowed"
              : "bg-[#c96d7d]"
          }`}
        >
          +
        </button>

        <button
          onClick={() => removeItem(item.id)}
          className="text-red-500 text-sm ml-2"
        >
          Remove
        </button>
      </div>
    </div>
  </div>

  {/* RIGHT = ONLY PRICE */}
  <div className="text-right font-bold text-lg">
    ${(item.price * item.quantity).toFixed(2)}
  </div>

</div>
            );  
};

export default CartItem;