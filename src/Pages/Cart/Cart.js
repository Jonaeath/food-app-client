import React from "react";
import { useCart, useDispatchCart } from "../../Context/ContextReducer";
import trash from '../../image/trash.png';

const Cart = () => {
  const data = useCart();
  console.log(data)
  const dispatch = useDispatchCart();
    if (data.length === 0) {
      return (
        <div>
          <div className="m-5 w-100 text-center fs-3">The Cart is Empty!</div>
        </div>
      );
    }
 
  const handleCheckOut = () => {};

  const totalPrice = data.reduce((total, food) => total + food.price, 0);
  
  return (
    <div>
      <div className="container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md">
        <table className="table table-hover ">
          <thead className=" text-success fs-4">
            <tr>
              <th scope="col">SL/No</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Option</th>
              <th scope="col">Amount</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td>
                  <button type="button" className="btn p-0">
                    <img src={trash} alt="delete" className="h-6 w-8" onClick={()=> {dispatch({type:"REMOVE",index:index})}}  />
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className="fs-2 text-center">Total Price: {totalPrice}/-</h1>
        </div>
        <div className="flex" style={{ alignItems: 'center', justifyContent: 'center' }}>
          <button className="btn bg-success mt-5 ml-5" onClick={handleCheckOut}>
            {" "}
            Check Out{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
