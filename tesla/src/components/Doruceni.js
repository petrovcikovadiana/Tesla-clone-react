import React from "react";
import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import Products from "../Products/Products";
import Sidebar from "../Sidebar/Sidebar";
import products from "../db/data";
import Card from "./Card";
import Navblack from "./Navblack";

function Doruceni() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  function filteredData(products, selectedCategory, selectedColor, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected category filter
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        ({ category, title, description, availability }) =>
          category === selectedCategory ||
          title === selectedCategory ||
          description === selectedCategory ||
          availability === selectedCategory
      );
    }

    // Applying selected color filter
    if (selectedColor) {
      filteredProducts = filteredProducts.filter(
        ({ color }) => color === selectedColor
      );
    }

    return filteredProducts.map(
      ({ img, title, prevPrice, description, availability }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          description={description}
          prevPrice={prevPrice}
          availability={availability}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, selectedColor, query);

  return (
    <div>
      <Navblack />
      <Sidebar
        handleCategoryChange={handleCategoryChange}
        handleColorChange={handleColorChange}
      />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Products result={result} />
    </div>
  );
}

export default Doruceni;
