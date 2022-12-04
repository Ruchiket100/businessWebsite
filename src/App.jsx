import { useState } from "react"
import styled from "styled-components"
import "./App.css"
import Navbar from "./components/Nav"

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <Navbar />
        </div>
    )
}

export default App
