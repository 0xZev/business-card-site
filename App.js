import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Foot from "./components/Foot"

export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Main />
            <Foot />
        </div>
    )
}