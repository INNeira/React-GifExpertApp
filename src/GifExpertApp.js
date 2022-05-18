import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { ListCategory } from "./components/ListCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One punch"
  ]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory categories={categories} setCategories={setCategories} />
      <hr />


      {categories.map((category) => {
          return <ListCategory key={category} category={category} />;
        })}
      
    </>
  );
};
