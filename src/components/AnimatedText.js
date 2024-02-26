import React from "react";
import "../Style/Animatedtext.css";


const Animatedtext = () => {   

    return(
        <div className="flex-container">
        <div className="animated-text-container">
            <div>Hello, I'm</div>
            <h1>Saiful Islam</h1>

            <div className="text-container">
                <div>
                    <div className="hiding-bar"></div>
                    <p className="text-animation">Full-stack developer</p>
                </div>
                <div className="cursor"></div>
            </div>
        </div>
        </div>
        
    )
}

export default Animatedtext;