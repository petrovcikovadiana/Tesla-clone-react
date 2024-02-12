import React from "react";
import Input from "../../components/Input";
import "./Category.css";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Model Y"
          title="Model Y"
          name="name"
        />
        <Input
          handleChange={handleChange}
          value="Model X"
          title="Model X"
          name="name"
        />{" "}
        <Input
          handleChange={handleChange}
          value="Model 3"
          title="Model 3"
          name="name"
        />{" "}
        <Input
          handleChange={handleChange}
          value="Model S"
          title="Model S"
          name="name"
        />
        <h1>Výbava</h1>
        <div>
          <input type="checkbox" />
          <label>Performance s pohonem všech kol</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Long Range s pohonem všech kol</label>
        </div>
        <div>
          <input type="checkbox" name="interest" />
          <label>Model Y s pohonem zadních kol</label>
        </div>
      </div>
    </div>
  );
}

export default Category;
