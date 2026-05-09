import { useState } from 'react';
import OrderSummary from '../components/OrderSummary';
import { useCart } from '../context/useCart';



function CheckOut() {
      const { cartItems } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const [data, setData] = useState({
    firstName: '',
    lastName: '',   
    Email: '',
    phone: '',
    city: '',
    postalCode: '',
    country: '',
    PaymentMethod: 'cod',
    orderNotes: '',
  });

    const handleChange = (e) => {           
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

    const handleplaceOrder = () => {
        if (!data.firstName || !data.lastName || !data.Email || !data.phone || !data.city || !data.postalCode || !data.country) {
            alert('Please fill in all required fields');
            return;
        }
        // Here you would typically send the order data to your backend server
        console.log('Order Placed:', data);

    }
  
  return (
    <div className='w-screen flex justify-center mt-8'>
        <section className='w-full max-w-7xl'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#c96d7d] p-8 rounded-lg shadow-lg'>
                <div>
                    <h1 className="text-3xl font-bold mb-4">Billing Details</h1>
                    <div className='space-y-4'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <input type="text" placeholder='First Name' name='firstName' value={data.firstName} onChange={handleChange} className='w-full p-3 border rounded-lg' />
                            <input type="text" placeholder='Last Name' name='lastName' value={data.lastName} onChange={handleChange} className='w-full p-3 border rounded-lg' />  
                        </div>
                        <input type="email" placeholder='Email Address' name='Email' value={data.Email} onChange={handleChange} className='w-full p-3 border rounded-lg' />
                        <input type="text" placeholder='Phone Number' name='phone' value={data.phone} onChange={handleChange} className='w-full p-3 border rounded-lg' />
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input type="text" placeholder="City" name='city' value={data.city} onChange={handleChange} className="border p-2 rounded w-full"/>
                        <input type="text" placeholder="Postal Code" name='postalCode' value={data.postalCode} onChange={handleChange} className="border p-2 rounded w-full"/>
                       </div> 
                       <input type="text" placeholder="Country" name='country' value={data.country} onChange={handleChange} className="border p-2 rounded w-full"/>
                    </div>  
                    
                    {/*test form data */}
                   {/*<button onClick={() => console.log(data)} className='mt-4 bg-[#EA9998] text-white p-3 rounded-lg hover:bg-[#b85c6e] transition'>
                        test form</button>    */}               
                </div>
                
                <div>
                     <OrderSummary cartItems={cartItems} subtotal={subtotal} />                   
                </div>
                <div>
                     <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
                 <div className='space-y-4'>
                        <label className='flex items-center space-x-2'>
                            <input type="radio" name='payment' className='form-rado' value="cod" />
                               <span>Cash On Delivery</span>
                            <input type="radio" name="payment" className='form-radio' value="card" disabled/>
                            <span>Credit Card (Coming Soon)</span>
                        </label>                            
                    </div>                    
                </div>
                <button className='w-full bg-[#EA9998] text-white p-3 rounded-lg mt-4 hover:bg-[#b85c6e] transition' onClick={handleplaceOrder}>
                    Place Order
                </button>
            </div>                
        </section>
    </div>
  );
};

export default CheckOut;