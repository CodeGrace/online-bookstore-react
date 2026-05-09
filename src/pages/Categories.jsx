import React from "react";
import { Link } from "react-router-dom";

function Categories() {
 const categories = [
  {
    id: 1,
    name: "Fiction",
    image: "https://i.pinimg.com/736x/30/e2/bc/30e2bc0e4cb59bf8c4b9255d247f7faf.jpg",
    link: "/books?category=Fiction",
  },
  {
    id: 2,
    name: "Non-Fiction",
    image: "https://i.pinimg.com/736x/21/83/75/21837570f8d6909b31cb7ad5a85f1dab.jpg",
    link: "/books?category=Non-Fiction",
  },
  {
    id: 3,
    name: "Science",
    image: "https://i.pinimg.com/736x/82/9e/fc/829efcea448a66d544f6c5aa988a0f70.jpg",
    link: "/books?category=Science",
  },
  {
    id: 4,
    name: "History",
    image: "https://i.pinimg.com/1200x/72/72/5e/72725eea33abf55e039feb0378a834a7.jpg",
    link: "/books?category=History",
  },
];



  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between rounded-2xl bg-[#c96d7d] px-6 py-4">
          <h2 className="text-2xl font-bold text-white">Categories</h2>
          <Link
            to="/Books"
            className="text-white hover:underline"
          >
            See All
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col items-center gap-3">

              {/* Image Card */}
              <Link
                to={category.link}
                className="group w-full rounded-xl bg-white shadow dark:shadow-[#FFFF33] hover:shadow-xl transition overflow-hidden"
              >
                <div className="h-64 w-full overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition"
                  />
                </div>
              </Link>

              {/* Separate Button */}
              <Link
                to={category.link}
                className="rounded bg-[#c96d7d] px-13 py-1 text-sm font-semibold text-white hover:bg-[#c96d7d]/80 transition"
              >
                {category.name}
              </Link>

            </div>
  ))}
</div>

        </div>
    </section>
  );
}

export default Categories;
