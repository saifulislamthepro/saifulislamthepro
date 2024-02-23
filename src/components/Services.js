import React from "react";
import "../Style/Services.css";

const Services = () => {
    return(
        <div className="Services-container">
            <h2>Services</h2>
            <div className="Cards">
            <div className="Card">
                <h2>Graphic Design</h2>
                <p>Lorem ipsum</p>
                <p>Experience: 8 years</p>
            </div>
            <div className="Card">
                <h2>Web Design</h2>
                <p>Lorem ipsum</p>
                <p>Experience: 3 years</p>
            </div>
            <div className="Card">
                <h2>Web Development</h2>
                <p>Lorem ipsum</p>
                <p>Experience: 2 years</p>
            </div>
            </div>
        </div>
    )
}

export default Services;