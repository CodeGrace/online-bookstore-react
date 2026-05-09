 import { books } from "../data/books";
import BookCard from "../components/BookCard";
import Categories from "../pages/Categories";
import {useNavigate } from "react-router-dom";  
import { useState } from "react";

function Home() {
  const navigate = useNavigate(); 
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
  {/* HERO */}
  <section className="flex flex-col md:flex-row items-center justify-between gap-10 py-24">
    <div className="mx-auto w-full px-6 py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">

        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold leading-tight">
            Find the book you're looking for easier to read.
          </h1>
          <p className="mt-4 mb-6">
            The most appropriate book site to reach books!
          </p>

          <div className="flex max-w-md overflow-hidden rounded-full bg-white border" > 
            <input className="flex-1 px-4 py-2 outline-none text-[#c96d7d]" placeholder="Find your desire books here ... " value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={(e) => {
  if (e.key === "Enter") {
    navigate(`/books?search=${searchTerm}`);
  }
}}
 />
            <button className="bg-[#c96d7d] px-6 rounded-2xl" onClick={() => navigate(`/books?search=${searchTerm}`)}>
             Search
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img className="h-96 w-full object-fill  rounded-2xl shadow-xl dark:shadow-[#c96d7d]" src="https://i.pinimg.com/1200x/86/3b/38/863b383942d8187184d8d075562e4cea.jpg" />
        </div>

      </div>
    </div>
  </section>
  <Categories />
  {/* BOOK GRID */}  
  <section className="w-full">      
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-6 flex items-center justify-between rounded-2xl bg-[#c96d7d] px-6 py-4">
          <h2 className="text-2xl font-bold text-white">Best Seller of our store</h2>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.filter(book => book.isBestSeller).map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  </section>  
</>

  );
}

export default Home;
