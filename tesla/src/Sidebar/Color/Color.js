import React from "react";
import Input from "../../components/Input";
import "./Color.css";

export default function Color({ handleChange }) {
  return (
    <div>
      <h1>Barva</h1>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test" />
        <span className="checkmark"></span>ALL
      </label>
      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="test"
        color="blue"
      />{" "}
      <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="test"
        color="red"
      />{" "}
      <Input
        handleChange={handleChange}
        value="gray"
        title="Gray"
        name="test"
        color="gray"
      />
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="green" name="test" />
        <span
          className="checkmark"
          style={{ background: "green", border: "2px solid black" }}
        ></span>
        ALL
      </label>
    </div>
  );
}
