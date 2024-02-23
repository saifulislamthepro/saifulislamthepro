import React from "react";
import "../Style/Lineanimate.css";

const Lineanimate= () => {
    return (
        <div className="animate-container">
            <div className="line-container">
                <div className="line"></div>
                <div className="circle"></div>
            </div>
            <div className="still-container">
                <div className="circle-still right"></div>
                <div className="circle-still left"></div>
            </div>
        </div>

    )
}

export default Lineanimate;