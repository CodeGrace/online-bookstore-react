import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";


function Navbar() {
  const { cartItems } = useCart();

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    
<nav className="fixed top-0 z-20 w-full border-b bg-[#c96d7d]">
  <div className="flex items-center justify-between px-6 py-4">

    {/* LEFT: Logo + Name */}
    <a href="/" className="flex items-center gap-3">
      <img
        src="https://i.pinimg.com/1200x/d1/4a/ae/d14aae582631252167b12cea2b402fca.jpg"
        className="w-12 h-12 rounded-full"
        alt="Logo"
      />
      <span className="text-xl font-semibold text-white whitespace-nowrap">
        Nagar Book Store
      </span>
    </a>

    {/* RIGHT: Links + Cart */}
    <div className="flex items-center gap-6 text-white">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/contact">Contact</Link>
     <button >
         <a href="#" className="hover:text-[#c96d7d!important]">Sign Up</a>
     </button>

      {/* Cart */}
       <Link to="/cart" className="relative">
        <img
          className="w-8 h-8 rounded-full"
          src="https://i.pinimg.com/736x/50/f6/72/50f672f558fcccadf44e11f8bd5a62f0.jpg"
          alt="cart"
        />
        <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full px-1">
          {cartCount}
        </span>
      </Link>
    </div>

  </div>
</nav>

  )
}

export default Navbar;
