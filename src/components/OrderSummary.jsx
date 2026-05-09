function OrderSummary({ cartItems,subtotal }) {
  return (
    <div className="mt-8 p-4 bg-[#c96d7d] rounded-lg">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="grid grid-cols-2 justify-between mb-2">
              <span>{item.title}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
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
  );
}

export default OrderSummary;