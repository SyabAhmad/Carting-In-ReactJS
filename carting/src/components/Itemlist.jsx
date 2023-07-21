import React, { Fragment, useState } from "react";
import "./Itemlist.css";
const Itemlist = () => {
  const [cartItem, setCartItem] = useState([
    { name: "item1", price: "$50", category: "machine" },
    { name: "item2", price: "$60", category: "machine" },
  ]);
  return (
    <>
      <div id="list">
        <h2>
          Through this example you will learn how can you use state (array) to
          save to cart items
        </h2>
        <hr />
      </div>
      <div id="list">
        <h2>List</h2>
        <ul>
          {cartItem.map((item, index) => (
            <div id="box">
              <li key={index}>
                {item.name} - {item.price} {item.category}
              </li>
              <button>add</button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Itemlist;
