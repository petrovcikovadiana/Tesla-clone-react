import React from "react";
import Y from "../assets/icon-Y.png";

function Card({ img, title, prevPrice, description, availability }) {
  return (
    <div>
      <section className="card">
        <div className="card-details">
          <h1 className="card-title">{title}</h1>
          <p>{description}</p>
          <p>{availability}</p>
        </div>
        <img src={img} alt={title} className="card-img" />
        <section>
          <div>
            <p>{prevPrice}</p>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Card;
