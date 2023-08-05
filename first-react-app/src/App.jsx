import { useState } from 'react'
import './App.css'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'
// import Heading from './Heading'
import ColorList from './ColorList'
import Slots from './Slots'
import ShoppingList from './ShoppingList'


const data = [
  {id: 1,item: 'eggs', quantity: 12, purchased: false},
  {id: 2,item: 'milk', quantity: 1, purchased: true},
  {id: 3,item: 'chicken breasts', quantity: 4, purchased: false},
  {id: 4,item: 'carrots', quantity: 6, purchased: true}
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
        <ShoppingList items={data} />
    </div>

  )
}

export default App;
