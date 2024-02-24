import React, { useEffect, useState } from "react";
import "../Style/Slider.css";
import Banner1 from "../Images/Banner-1.jpg";
import Banner2 from "../Images/Banner-2.jpg";
import Banner3 from "../Images/Banner-3.jpg";

const banners = [
    { id: 1, imageUrl: Banner1},
    { id: 2, imageUrl: Banner2},
    { id: 3, imageUrl: Banner3},
];

const Slider = () => {
    const [currentBanner, setCurrentBanner] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
        }, 4000);

        return() => clearInterval(interval);
    }, []);


    return (
        <div className="slider-container"><div className="slider">
            {banners.map((banner, index) => (
                <div key={banner.id} className={`slide${index === currentBanner ? 'active' : ''}`}>
                    <img src= {banner.imageUrl} alt={`Banner ${index + 1}`}/>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Slider;