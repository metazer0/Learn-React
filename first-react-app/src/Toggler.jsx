import { useState } from 'react'
import './App.css'

export default function Toggler() {
    const [isHappy, setIsHappy] = useState(true)
    const toggleIsHappy = () => setIsHappy(!isHappy)
    return <p className="Toggler" onClick={toggleIsHappy}>{isHappy ? '🙂' : '☹️'}</p>
}