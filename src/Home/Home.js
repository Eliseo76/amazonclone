import React, { useEffect, useState } from "react";
import classes from "./Home.module.css";
import backgroundImage from "./oft.jpg";
import Product from "../Product/Product";
import leanImage from "../assets/download (1).png";

const Home = (props) => {
  const [data, setData] = useState(null);
  const getRandomInt = () => {
    return Math.floor(Math.random() * Math.floor(20));
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  if (data) {
    console.log(data[0]);
  }
  return (
    <div className={classes.home}>
      <div className={classes.home__container}>
        <img
          className={classes.home__image}
          src={backgroundImage}
          alt="background"
        />
      </div>
      <div className={classes.home__row}>
        {data && (
          <>
            <Product
              id={data[0].id}
              title={data[0].title}
              price={data[0].price}
              image={data[0].image}
              rating={4}
            />
            <Product
              id={data[1].id}
              title={data[1].title}
              price={data[1].price}
              image={data[1].image}
              rating={5}
            />
          </>
        )}
      </div>

      <div className={classes.home__row}>
        {data && (
          <>
            <Product
              id={data[2].id}
              title={data[2].title}
              price={data[2].price}
              image={data[2].image}
              rating={3}
            />
            <Product
              id={data[3].id}
              title={data[3].title}
              price={data[3].price}
              image={data[3].image}
              rating={4}
            />
            <Product
              id={data[4].id}
              title={data[4].title}
              price={data[4].price}
              image={data[4].image}
              rating={4}
            />
          </>
        )}
      </div>
      <div className={classes.home__row}>
        {data && (
          <Product
            id={data[5].id}
            title={data[5].title}
            price={data[5].price}
            image={data[5].image}
            rating={3}
          />
        )}
      </div>
      <div className={classes.home__row}></div>
    </div>
  );
};

export default Home;
