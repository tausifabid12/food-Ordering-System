import React from "react";

const CategoryCard = ({ info: { strCategoryThumb, strCategory } }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={strCategoryThumb} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{strCategory}</h2>
      </div>
    </div>
  );
};

export default CategoryCard;
