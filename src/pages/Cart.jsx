import { useCart } from "../context/useCart";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
function Cart() {
  const { cartItems} = useCart();
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
 

  // EMPTY CART CHECK
  if (cartItems.length === 0) {
    return (
      <section className="text-center py-20">
        <h2 className="text-2xl mb-4">
          Your cart is empty
        </h2>

        <Link to="/books" className="text-[#c96d7d] underline">
          Browse Books
        </Link>
      </section>
    );
  }

  

  return (
    
    <div className="w-screen bg-[#EA9998] flex justify-center">
      <section className="p-12 max-w-5xl w-full">
          <div className=" border-under mb-6 mt-18 border-style-solid  border-gray-300">
              <h2 className="text-3xl font-bold">Shopping Cart</h2>
              <h2 className="text-3xl font-bold text-right">Price</h2>            
          </div>
          
      <div className="space-y-6">
    {cartItems.map((item) => (
      <CartItem key={item.id} item={item} />
    ))}
  </div>
        <div className="mt-8 p-4 bg-[#c96d7d] rounded-lg">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="grid grid-cols-2 justify-between mb-2">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="grid grid-cols-2 justify-between mb-2">
            <span>Shipping</span>
            <span>${(subtotal * 0.1).toFixed(2)}</span>
          </div>
          <div className="grid grid-cols-2 justify-between font-bold text-lg mt-4">
            <span>Total</span>
            <span>${(subtotal + subtotal * 0.1).toFixed(2)}</span>
          </div>
        </div>  
          <Link to="/checkout" className="block mt-8 p-6 bg-[#799567] text-white text-center py-3 rounded-lg hover:bg-[#c96d7d]  transition-colors">
         → Proceed to Checkout
        </Link>    
        <div className="mt-8 p-4 bg-[#c96d7d] rounded-lg"> 
          <p>The price and availability of items in your cart are subject to change. The cart is a temporary storage space and does not guarantee the availability of items.</p>
        </div>  
      </section>
    
     </div>     
  
   

  );
}   

export default Cart;