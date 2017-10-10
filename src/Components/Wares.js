import React, { Component } from "react";
import { Link } from "react-router-dom";
import shopInventory  from "../Data/data.js";


export default class Wares extends Component {



  render() {
    let items = shopInventory.map((item, index) => {
      if (item.category === "wares"){
      return (

        <div key={index} className="physicalItems">
          <img src={item.image} alt="" />
          <p>{item.description}</p>
          <p>{item.price}</p>
          <Link to="/cart">
              <button>Purchase</button>
            </Link>

        </div>

      );
    }
    });

    return (
      <div>
      <h1> Wares </h1>
      <hr></hr>
      <div className="items">{items}</div>;
      </div>
    )
  }
}
