import React, { Component } from "react";
import { Link } from "react-router-dom";



export default class Contact extends Component {



  render() {
    return (
    <div>
      <form>
        <label>
          Name:
        <input type= "text" name= "Name"/>
        </label>
        <br></br>
        <label>
          Email:
        <textarea type= "text" name= "email"/>
        </label>
      </form>
    </div>


  )};
        }
