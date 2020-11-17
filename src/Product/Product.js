import React, { useEffect, useState } from "react";
import classes from "./Product.module.css";
import Rating from "@material-ui/lab/Rating";
import { useStateValue } from "../State/StateProvider";

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const [value, setValue] = useState(4);

  const addToBasket = () => {
    //dispatch the item to the state basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };

  useEffect(() => {
    if (value !== rating) {
      setValue(rating);
    }
  }, [rating, value]);
  return (
    <div className={classes.product}>
      <div className={classes.product__info}>
        <p>{title}</p>
        <p className={classes.product__price}>
          <small>$</small>
          <strong>{price}</strong>
          <div className={classes.product__rating}>
            <Rating
              name={"simple-controlled"}
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
        </p>
      </div>
      <img src={image} alt="The_lean_startup" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
