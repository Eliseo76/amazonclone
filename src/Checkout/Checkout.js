import React from "react";
import classes from "./Checkout.module.css";
import Subtotal from "../Subtotal/Subtotal";
import Product from "../Product/Product";
import { useStateValue } from "../State/StateProvider";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";

const Checkout = (props) => {
  const [state, dispatch] = useStateValue();
  console.log(state.basket);
  return (
    <div className={classes.checkout}>
      <div className={classes.checkout__left}>
        <img
          className={classes.checkout__ad}
          src="https://pulsarinstruments.com/storage/app/media/MIY%20-%20Were%20Exhibiting%20720x90.png"
          alt="fake__ad"
        />
        <div>
          <h2 className={classes.checkout__title}>Your shopping Basket</h2>
          {state.basket.map((item) => {
            return (
              <CheckoutProduct
                price={item.price}
                image={item.image}
                rating={4}
                id={item.id}
                title={item.title}
              />
            );
          })}
        </div>
      </div>
      <div className={classes.checkout__right}>
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
