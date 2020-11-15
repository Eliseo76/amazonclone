import React, { useEffect, useState } from "react";
import classes from "./Subtotal.module.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../State/StateProvider";

const Subtotal = (props) => {
  const [state, dispatch] = useStateValue();

  return (
    <div className={classes.subtotal}>
      <CurrencyFormat
        renderText={(value) => {
          return (
            <>
              <p>
                Subtotal ({`${state.basket.length}`} items):
                <strong>{`${value}`}</strong>
              </p>
              <small className={classes.subtotal__gift}>
                <input type={"checkbox"} /> This order contains a gift
              </small>
            </>
          );
        }}
        decimalScale={2}
        value={state.total}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
