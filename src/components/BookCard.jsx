import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart.jsx";

function BookCard({ book }) {
  const { addToCart } = useCart();
  return (   

    <div className="flex gap-4 rounded-xl border border-white/30 bg-[#c96d7d] p-4 shadow-md">      
      {/* Book Image */}
      <img
        src={book.image}
        alt={book.title}
        className="h-40 w-28 rounded-lg object-cover border"
      />
      
      {/* Book Info */}
      <div className="flex flex-col justify-between text-base text-white">      
        <div>
          <p className="opacity-80">
            <span className="font-semibold">Author:</span> {book.author}
          </p>

          <p className="opacity-80">
            <span className="font-semibold">Book:</span> {book.title}
          </p>

          <p className="opacity-80">
            <span className="font-semibold">Genres:</span> {book.genre}
          </p>  
            <Link
              to={`/books/${book.id}`}
              className="py-1 text-base opacity-80 hover:text-[#c96d7d] transition"
            >
              View Details--
            </Link>       
        </div>        

        <div className="flex items-center justify-between gap-2">
          <span className="font-bold text-red-600">
            Price: ${book.price}
          </span>           
         
          <button
             onClick={() => addToCart(book)} 
            disabled={book.stock === 0}
            className={`mt-10 px-3 py-1 text-xs rounded-full text-white transition ${
              book.stock === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "rounded-full bg-[#EA9998] hover:bg-[#EA9998] transition"
            }`}
          >
            Add to Cart
          </button>


        </div>
      </div>
    </div>
  );
}

export default BookCard;
