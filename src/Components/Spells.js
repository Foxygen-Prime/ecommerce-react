import React, { Component } from "react";
import { Link } from "react-router-dom";
import shopInventory  from "../Data/data.js";


export default class Spells extends Component {



  render() {
    let items = shopInventory.map((item, index) => {
      if (item.category === "spells"){
      return (

        <div key={index} className="spells">
          <img src={item.image} alt="" />
          <p>{item.description}</p>
          <p>{item.price}</p>
          <Link to="/spells">
              <button>Purchase</button>
            </Link>

        </div>

      );
    }
    });

    return (
      <div>
      <h1> Spells </h1>
      <hr></hr>
      <div className="items">{items}</div>;
      </div>
    )
  }
}
