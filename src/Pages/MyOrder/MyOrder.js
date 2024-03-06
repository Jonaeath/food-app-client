import React, { useEffect, useState } from "react";
import Header from "../../SharedFile/Header/Header";

export default function MyOrder() {
  const [orderData, setOrderData] = useState({});

  const fetchMyOrder = async () => {
    try {
      const response = await fetch("https://food-app-server-taupe.vercel.app/api/myOrderData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: localStorage.getItem("email"),
        }),
      });
      const data = await response.json();
      setOrderData(data);
    } catch (error) {
      console.error("Error fetching order data:", error);
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <div>
          <h2>My Orders</h2>
          {orderData.orderData && orderData.orderData.order_data ? (
            orderData.orderData.order_data.map((order, index) => (
              <div key={index}>
                <div className="my-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-4">
                  {order.map((item, itemIndex) => (
                    <div key={itemIndex} className="">
                      <div className="card w-96 bg-base-300 shadow-xl transform transition-transform hover:scale-105">
                        <figure className="h-[200px] w-full">
                          <img
                            src={item.img}
                            alt="food"
                            className="h-full w-full object-cover"
                          />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">{item.name}</h2>
                          <p>Price: {item.price}</p>
                          <p>Size: {item.size}</p>
                          <p>Quantity: {item.qty}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p>No orders found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
