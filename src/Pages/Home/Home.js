import React, { useEffect, useState } from "react";
import Header from "../../SharedFile/Header/Header";
import Card from "../Card/Card";
import Banner from "../Carousel/Banner";
import food from "../../image/food.png";

const Home = () => {
  const [foodData, setFoodData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/foodCollection")
      .then((res) => res.json())
      .then((data) => setFoodData(data));
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

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
        onSearch={handleSearch}
      />

      <div className="container m-4">
        {foodData?.allFoodCategory && foodData.allFoodCategory.length > 0 ? (
          foodData.allFoodCategory.map((category) => (
            <div key={category._id}>
              <h2 className="text-2xl text-bold mt-6 mb-4 text-accent uppercase">
                ----------- {category.CategoryName} ------------
              </h2>
              <hr />
              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-4">
                {foodData.allFoodsData
                  .filter(
                    (foodItem) =>
                      foodItem.CategoryName === category.CategoryName &&
                      (searchTerm === "" ||
                        foodItem.name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()))
                  )
                  .map((filteredItem) => (
                    <Card
                      key={filteredItem._id}
                      foodDetails={filteredItem}
                      options={filteredItem.options[0]}
                    />
                  ))}
              </div>
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
