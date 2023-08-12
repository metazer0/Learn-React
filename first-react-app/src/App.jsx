import { useState } from "react";
import "./App.css";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
// import Heading from './Heading'
import ColorList from "./ColorList";
import Slots from "./Slots";
import ShoppingList from "./ShoppingList";
import PropertyList from "./PropertyList";
import Clicker from "./Clicker";
import Form from "./Form";
import Counter from "./Counter";
import Toggler from "./Toggler";
import ToggleCounter from "./ToggleCounter";
import ColorBox from "./ColorBox";
// const data = [
//   {id: 1,item: 'eggs', quantity: 12, purchased: false},
//   {id: 2,item: 'milk', quantity: 1, purchased: true},
//   {id: 3,item: 'chicken breasts', quantity: 4, purchased: false},
//   {id: 4,item: 'carrots', quantity: 6, purchased: true}
// ]

// const properties = [
//   { id: 129031, name: "Desert Yur", rating: 4.9, price: 150 },
//   { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//   { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
//   { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//   { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
//   { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
// ];

const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
]



function App() {
  return (
    <div>
      {/* <Greeter person="Bill" from="Colt"/>
    <Greeter person="Ted" />
    <Greeter person="Rosa" from="Elton"/>
    <Die numSides={20}/>
    <Die/>
    <Die numSides={10}/> */}
      {/* <ListPicker values={[1,2,3]}/>
    <ListPicker values={['a','b','c']}/> */}
      {/* <DoubleDice/>
    <Heading  text="welcome"/> */}
      {/* <ColorList colors={['red','pink','purple','teal']}/> */}
      {/* <Slots val1="🍒" val2="🍒" val3="🍒"/>
    <Slots val1="🍒" val2="🍌" val3="🍒"/> */}
      {/* <ShoppingList items={data} /> */}
      {/* <PropertyList properties={properties} /> */}
      {/* <Clicker/> */}
      {/* <Form/> */}
      {/* <Counter/> */}
      {/* <ToggleCounter/> */}
      <ColorBox colors={colors}/>
    </div>
  );
}

export default App;
