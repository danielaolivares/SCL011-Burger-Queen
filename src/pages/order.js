import React, { Component } from "react";
import ButtonBasic from "../components/btnBasic";
// import sushi from "../data/menu.json"
import db from "../firebaseComfig"
import data from "../data/menu.json";


import Navbar from "../components/Navbar"
import { Link } from "react-router-dom";

const botonMenu = data.menu
// const btnName = botonMenu.map((pedidos) => {
//   return pedidos.name
// })
class Order extends Component {
  render() {

    return (
      <div>
        <div>
          {botonMenu.map(btnName => (
            <ButtonBasic
              name={btnName.name} price={btnName.price} />
          ))}
        </div>
      </div>
    );
  };
};

export default Order;