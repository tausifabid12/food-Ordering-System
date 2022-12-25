import React from "react";
import CategoryCard from "./CategoryCard";
import { useQuery } from "@tanstack/react-query";

const Categories = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch(`http://localhost:5000/allCategory`, {
        // headers: {
        //   authorization: `bearer ${localStorage.getItem("accessToken")}`,
        // },
      }).then((res) => res.json()),
  });

  return (
    <div className="py-6">
      <div className="flex justify-between p-2 bg-white">
        <h2 className="text-2xl md:text-3xl  font-bold ">Categories</h2>
        {/* <button className="block lg:hidden">view all</button> */}
      </div>

      <div className="flex lg:block space-x-2 space-y-3 py-3 overflow-x-auto bg-white">
        {categories?.data &&
          categories?.data.map((cat) => (
            <CategoryCard key={cat?._id} info={cat} />
          ))}
      </div>
    </div>
  );
};

export default Categories;
