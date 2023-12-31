import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../style/NavBar.css";

function NavBar({ token, setToken, handleLogout, cart, setCart }) {
  // Cart quantity, initially set to 0
  let cartQTY = 0;
  cartQTY = cart.map((item) => cartQTY + Number(item.quantity));
  cartQTY = cartQTY.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return (
    <div className="nav-bar-div">
      <h1 className="title">The Store</h1>
      <div className="nav-links-div">
        <NavLink to={"/"}>Home</NavLink>
        {token ? (
          <NavLink to={"/login"} onClick={handleLogout}>
            Logout
          </NavLink>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
        <NavLink to={"/cart"} className={"cart-link"}>
          Cart
          {cart.length > 0 && <sub className="cart-qty">{cartQTY}</sub>}
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
