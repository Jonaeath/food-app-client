import React from "react";
import { useCart, useDispatchCart } from "../../Context/ContextReducer";
import trash from '../../image/trash.png';
import image from '../../image/nothing.jpg';

const Cart = () => {
  const data = useCart();
  console.log(data)
  const dispatch = useDispatchCart();
    if (data.length === 0) {
      return (
        <div>
          <div className="m-5 w-100 text-center text-2xl fs-3">The Cart is Empty!</div>
          <img
            src={image}
            alt="Nothing"
            className="h-screen w-screen"
          />
        </div>
      );
    }
 
    const handleCheckOut = async () => {
      let email = localStorage.getItem("email");
      // console.log(data,localStorage.getItem("email"),new Date())
      let response = await fetch("https://food-app-server-taupe.vercel.app/api/orderData", {
        // credentials: 'include',
        // Origin:"http://localhost:3000/login",
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
          order_data: data,
          email: email,
          order_date: new Date().toDateString()
        })
      });
      console.log("JSON RESPONSE:::::", response.status)
      if (response.status === 200) {
        dispatch({ type: "DROP" })
      }
    }

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
          <button className="btn bg-green-400 mt-5 ml-5" onClick={handleCheckOut}>
            {" "}
            Check Out{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
