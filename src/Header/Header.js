import React from "react";
import classes from "./Header.module.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { NavLink } from "react-router-dom";
import { useStateValue } from "../State/StateProvider";

const Header = (props) => {
  const [state, dispatch] = useStateValue();

  return (
    <div className={classes.header}>
      <NavLink to={"/"}>
        <img
          className={classes.header__logo}
          src="https://www.jing.fm/clipimg/full/81-815835_amazon-logo-png-amazon-logo-white.png"
          alt="amazon logo"
        />
      </NavLink>
      <div className={classes.header__search}>
        <input className={classes.header__searchInput} type="text" />
        <SearchIcon className={classes.header__searchIcon} />
      </div>
      <div className={classes.header__nav}>
        <div className={classes.header__option}>
          <span className={classes.header__optionLineOne}>Hello Guest</span>
          <NavLink activeStyle={{ color: "white" }} to={"/login"}>
            <span
              className={classes.header__optionLineTwo}
              style={{ color: "white" }}
            >
              Sign In
            </span>
          </NavLink>
        </div>
        <div className={classes.header__option}>
          <span className={classes.header__optionLineOne}>Returns</span>
          <span className={classes.header__optionLineTwo}>& Orders</span>
        </div>
        <div className={classes.header__option}>
          <span className={classes.header__optionLineOne}>Your</span>
          <span className={classes.header__optionLineTwo}>Prime</span>
        </div>
        <div className={classes.header__optionBasket}>
          <NavLink activeStyle={{ color: "white" }} to={"/checkout"}>
            <ShoppingBasketIcon color={"disabled"} style={{ color: "white" }} />
          </NavLink>
          <span className={classes.header__basketCount}>
            {state.basket?.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
