import React, { useEffect, useState } from "react";
import classes from "./CheckoutProduct.module.css";
import Rating from "@material-ui/lab/Rating";
import { useStateValue } from "../../State/StateProvider";

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const [value, setValue] = useState(4);
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    if (value !== rating) {
      setValue(rating);
    }
  }, [rating, value]);
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className={classes.checkoutProduct}>
      <img className={classes.checkoutProduct__image} src={image} alt={""} />
      <div className={classes.checkoutProduct__info}>
        <p className={classes.checkoutProduct__title}>{title}</p>
        <p className={classes.checkoutProduct__price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <Rating
          name={"simple-controlled"}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
