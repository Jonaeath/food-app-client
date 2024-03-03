import React, { useEffect, useRef, useState } from "react";
import { useCart, useDispatchCart } from "../../Context/ContextReducer";

const Card = (props) => {
  const foodDetail = props.foodDetails;

  const options = props.options;
  const priceOptions = Object.keys(options);

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  const dispatch = useDispatchCart();
  const data = useCart();
  const priceRef = useRef();

  const handelAddToCart = async () => {
    await dispatch({
      type: "ADD",
      id: foodDetail._id,
      name: foodDetail.name,
      img: foodDetail.img,
      price: finalPrice,
      qty: qty,
      size: size,
    });
    console.log(data);
  };

  const finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  return (
    <div>
      <div className="card w-96 bg-base-300 shadow-xl transform transition-transform hover:scale-105">
        <figure className="h-[200px] w-full">
          <img
            src={foodDetail.img}
            alt="food"
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{foodDetail.name}</h2>
        </div>
        <div className="container flex w-full">
          <select
            className="m-2 bg-green-400 rounded"
            onChange={(e) => setQty(e.target.value)}
          >
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select
            className="m-2 h-100 bg-green-400 rounded"
            ref={priceRef}
            onChange={(e) => setSize(e.target.value)}
          >
            {priceOptions.map((data) => {
              return (
                <option key={data} value={data}>
                  {data}
                </option>
              );
            })}
          </select>
          <div className="m-2 h-100">Total Price:${finalPrice}</div>
        </div>

        <div className="card-actions justify-center">
          <button
            className="btn bg-green-400 w-1/2 m-4 uppercase text-bold"
            onClick={handelAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
