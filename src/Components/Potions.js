import React, { Component } from "react";
import { Link } from "react-router-dom";
import shopInventory  from "../Data/data.js";


export default class Potions extends Component {



  render() {
    let items = shopInventory.map((item, index) => {
      if (item.category === "potions"){
      return (

        <div key={index} className="potions">
          <img src={item.image} alt="" />
          <p>{item.description}</p>
          <p>{item.price}</p>
          <Link to="/potions">
              <button>Purchase</button>
            </Link>

        </div>

      );
    }
    });

    return (
      <div>
      <h1> Potions! </h1>
      <hr></hr>
      <div className="items">{items}</div>;
      </div>
    )
  }
}
