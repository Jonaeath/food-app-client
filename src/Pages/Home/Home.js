import React, { useEffect, useState } from "react";
import Header from "../../SharedFile/Header/Header";
import Card from "../Card/Card";
import Banner from "../Carousel/Banner";
import food from "../../image/food.png";

const Home = () => {
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/foodCollection")
      .then((res) => res.json())
      .then((data) => setFoodData(data));
  }, []);

  return (
    <div>
      <Header />
      <Banner
        img={food}
        title="Best Food Waiting for your belly"
        sub="Save up to 50% on your first order"
        btn="Search"
        placeholder="Search"
        animation="mx-auto sm:w-2/3 md:w-2/3 lg:w-1/2 animate-spin-slow"
      />
      <div>
        {foodData?.allFoodCategory && foodData.allFoodCategory.length > 0 ? (
          foodData.allFoodCategory.map((category) => (
            <div key={category._id}>
              <h2>{category.CategoryName}</h2>
              {foodData.allFoodsData
                .filter(
                  (foodItem) => foodItem.CategoryName === category.CategoryName
                )
                .map((filteredItem) => (
                  <Card
                    key={filteredItem._id}
                    foodName={filteredItem.name}
                    image={filteredItem.img}
                    options={filteredItem.options[0]}
                  />
                ))}
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Home;
