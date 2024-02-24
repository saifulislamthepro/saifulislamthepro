import React from "react";
import About from './About';
import Contact from './Contact';
import Services from "./Services";
import Lineanimate from "./Lineanimate";
import Slider from "./Slider";
import Animatedtext from"./AnimatedText";

const Home = () => {
    return(
        <div>
            <Animatedtext/>
            <Slider/>
            <About/>
            <Lineanimate/>
            <Services/>
            <Lineanimate/>
            <Contact/>

        </div>
    )
}

export default Home;