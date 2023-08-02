import { useState } from 'react'
import './App.css'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    {/* <Greeter person="Bill" from="Colt"/>
    <Greeter person="Ted" />
    <Greeter person="Rosa" from="Elton"/>
    <Die numSides={20}/>
    <Die/>
    <Die numSides={10}/> */}
    <ListPicker values={[1,2,3]}/>
    <ListPicker values={['a','b','c']}/>
    </div>
  )
}

export default App;
