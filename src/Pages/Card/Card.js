import React from "react";

const Card = (props) => {
  const options = props.options;
  const priceOptions = Object.keys(options);

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={props.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.foodName}</h2>
        </div>
        <div className="container flex w-100">
          <select className="m-2 bg-accent rounded">
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select className="m-2 h-100 bg-accent rounded">
            {priceOptions.map((data) => {
              return (
                <option key={data} value={data}>
                  {data}
                </option>
              );
            })}
          </select>
          <div className="m-2 h-100">Total Price</div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
