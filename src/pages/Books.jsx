import { useSearchParams } from "react-router-dom";
import BookCard from "../components/BookCard";
import { books } from "../data/books";

import { Link } from "react-router-dom";

function Books() {

 const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort");
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category");
  const genre = searchParams.get("genre");
  const availableGenres = [
  ...new Set(
    books
      .filter(book => category ? book.category === category : true)
      .map(book => book.genre)
  )
];

  const filteredBooks = books.filter(book => {
 const matchesSearch = search
  ? ["title", "author", "genre"].some(field =>
      book[field]?.toLowerCase().includes(search.toLowerCase())
    )
  : true;

  const matchesCategory =
    category ? book.category === category : true;

  const matchesGenre =
    genre ? book.genre === genre : true;

  return matchesSearch && matchesCategory && matchesGenre;
});

  let sortedBooks = [...filteredBooks];
  if (sort === "title-asc"){
    sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (sort === "title-desc"){
    sortedBooks.sort((a, b) => b.title.localeCompare(a.title));
  }

  if (sort === "author-asc"){
    sortedBooks.sort((a, b) => a.author.localeCompare(b.author));
  }

  return (
    <section className="px-6 py-12">
      <h1 className="pt-8 text-3xl font-bold mb-6">
        {category ? `${category} Books` : "All Books"}
      </h1>

      <div className="mb-6 flex flex-wrap gap-3">
  {availableGenres.map(g => (
   <Link
  key={g}
  to={{
    pathname: "/books",
    search: new URLSearchParams({
      ...(category ? { category } : {}),
      genre: g
    }).toString()
  }}
>
  {g}
</Link>
  ))}
</div>

{/* Sorting dropdown */}
  <div className="mb-6">
    <select
      value={sort || ""}
      onChange={(e) => {
        const params = new URLSearchParams(searchParams);
        params.set("sort", e.target.value);
        window.location.search = params.toString(); // updates the URL and triggers re-render
      }}
      className="border px-3 py-2 rounded bg-[#c96d7d] text-white"
    >
      <option value="">Sort By</option>
      <option value="title-asc">Title A → Z</option>
      <option value="title-desc">Title Z → A</option>
      <option value="author-asc">Author A → Z</option>
    </select>
  </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {sortedBooks.length === 0 ? (
    <div className="col-span-full text-center py-16 text-gray-500">
      <p className="text-xl font-semibold">Oops! No books found 📭</p>
      {search && <p className="mt-2">No results for "<span className="font-semibold">{search}</span>"</p>}
      <p className="mt-2">Try another keyword, genre, or category.</p>
    </div>
  ) : (
    sortedBooks.map(book => <BookCard key={book.id} book={book} />)
  )}
</div>
    </section>
  );
}

export default Books;