import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ info: { strCategoryThumb, strCategory } }) => {
  return (
    <Link to={`/allProduct/${strCategory}`}>
      <div className="card card-side bg-base-100 shadow-md transition duration-200 ease-linear lg:hover:scale-90">
        <figure>
          <img
            src={strCategoryThumb}
            className="w-20 h-20 rounded-lg"
            alt="Category"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{strCategory}</h2>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
