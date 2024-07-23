import React from "react";
import s from "./Bar.module.css";
import { Link } from "react-router-dom";

const Bar = () => {
  return (
    <nav>
      <ul className={s.list}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/contacts">Contacts</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
      <hr />
    </nav>
  );
};

export default Bar;