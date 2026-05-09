import React from "react";
import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <Link
      to={category.link}
      className="group relative h-48 rounded-xl overflow-hidden shadow hover:shadow-xl transition"
    >
      {/* Image */}
      <img
        src={category.image}
        alt={category.name}
        className="h-full w-full object-cover group-hover:scale-105 transition"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h3 className="text-white text-xl font-bold">
          {category.name}
        </h3>
      </div>
    </Link>
  );
}

export default CategoryCard;
