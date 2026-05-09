import { useParams, Link } from "react-router-dom";
import { books } from "../data/books";
import { useCart } from "../context/useCart.jsx";
import { useState } from "react";

function BookDetails() {
  {/* message pop up */}
  const [added, setAdded] = useState(false);  
  const { id } = useParams();
  const book = books.find(b => b.id === Number(id));
  const { addToCart } = useCart()

  if (!book) {
    return (
      <section className="px-6 py-12">
        <p className="pt-8 text-xl">Book not found.</p>
        <Link to="/books" className="text-[#c96d7d] underline">
          Back to Books
        </Link>
      </section>
    );
  }

    const stock = Number(book.instock)

      let statusContent

      if (stock === 0) {
        statusContent = (
          <span className="text-red-600 font-semibold">
            Out of Stock
          </span>
        )
      } else if (stock < 5) {
        statusContent = (
          <span className="text-orange-500 font-semibold">
            Only {stock} left
          </span>
        )
      } else {
        statusContent = (
          <span className="text-green-600 font-semibold">
            In Stock ({stock})
          </span>
        )
      }

        


  return (
    <section className="px-6 py-16 max-w-5xl mx-auto">
      <Link to="/books" className="mt-8 inline-block hover:text-[#c96d7d!important] underline">
        ← Back to Books
      </Link>

      <div className="mt-10 grid md:grid-cols-2 gap-12">

        {/* Image */}
        <div>
          <img
            src={book.image}
            alt={book.title}
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-between">

          <div>
            <h1 className="text-4xl font-bold mb-3">
              {book.title}
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              by {book.author}
            </p>

            <div className="space-y-3 text-lg">
              <p><strong>Category:</strong> {book.category}</p>
              <p><strong>Genre:</strong> {book.genre}</p>
              <p><strong>Price:</strong> ${book.price}</p>

              <p><strong>Status:</strong> {statusContent}</p>
            </div>

            <p className="mt-8 text-gray-700 leading-relaxed">
              {book.description}
            </p>
          </div>
          {added && (
  <p className="text-green-600 mt-3">
    ✓ Added to cart
  </p>
)}
          <button
  onClick={() => {
    addToCart(book);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  }}
  disabled={book.stock === 0}
  className={`mt-10 px-6 py-3 rounded-full text-white transition ${
    book.stock === 0
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-[#c96d7d] hover:bg-[#e79aa8]"
  }`}
>
  Add to Cart
</button>

        </div>
      </div>
    </section>
  );
}

export default BookDetails;