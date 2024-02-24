import React from "react";
import "../Style/Services.css";

const Services = () => {
    return(
        <div className="Services-container">
            <h2>My expertise</h2>
            <div className="Cards">
            <div className="Card">
                <h2>UX/UI</h2>
                <p>Creative field</p>
                <p><span className="experience">Experience: 6 years</span></p>
            </div>
            <div className="Card">
                <h2>Front-end Design</h2>
                <p>Coding field</p>
                <p><span className="experience">Experience: 3 years</span></p>
            </div>
            <div className="Card">
                <h2>Back-end Design</h2>
                <p>Programming field</p>
                <p><span className="experience">Experience: 2 years</span></p>
            </div>
            </div>
        </div>
    )
}

export default Services;