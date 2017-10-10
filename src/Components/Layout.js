import React, {Component} from 'react';
// IMPORT NavLink <<<<<<<<<<<<<<<
import {NavLink} from 'react-router-dom';
import Wares from './Wares';

export default class BaseLayout extends Component {
  render()
  {
  return (
    <div>
    <div className="navbar-header">
     <nav className="row navbar navbar-inverse">
      <ul className="nav navbar-nav">
        <li>
          <NavLink activeClassName="selected" exact to="/">Magical Menagerie Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/wares">Wares</NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/spells">Spells</NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/potions">Potions</NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/cart">Shopping Cart</NavLink>
        </li>
      </ul>
    </nav>
  </div>
  <div>
      {this.props.children}
  </div>
      <footer>
      <p> Thank you for shopping by! </p>
      </footer>
  </div>

  )}
}
