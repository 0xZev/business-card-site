import React from "react"

export default function Navbar() {
    return (
        <div className="header-container">
            <img src="../images/profilelogo.jpg" className="info-image"/>
            <h1 className="header-name"> Zev </h1>
            <h2 className="header-title"> Frontend Developer </h2>
            <p className="header-text"> itsartzy77@gmail.com </p>
            <button className="header-bttn">
                <span>
                    <img src="../images/Mail.png" className="btn-icon" />
                </span>
                <span>
                    Email
                </span>
            </button>
        </div>
    )
}