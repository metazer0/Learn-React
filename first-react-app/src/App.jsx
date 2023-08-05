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

// const data = [
//   {id: 1,item: 'eggs', quantity: 12, purchased: false},
//   {id: 2,item: 'milk', quantity: 1, purchased: true},
//   {id: 3,item: 'chicken breasts', quantity: 4, purchased: false},
//   {id: 4,item: 'carrots', quantity: 6, purchased: true}
// ]

const properties = [
  { id: 129031, name: "Desert Yur", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

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
      <PropertyList properties={properties} />
    </div>
  );
}

export default App;
