import React, { useState } from "react";
import ProductFilter from "../components/ProductFilter";
import AllProducts from "../components/AllProducts";



const ProductList = () => {

  const handleFilterChange = (key, value) => {
    console.log(`تصفية ${key} بالقيمة: ${value}`);
  };

  return (
    <div className="container">
      <h3 className="text-center">زراعي</h3>
      <ProductFilter onFilterChange={handleFilterChange} />
      <AllProducts/>
    </div>
  );
};

export default ProductList;
