import React from "react";
import Profileimage from '../Images/Saiful_Islam.jpg';
import '../Style/About.css'
const About = () => {
    return (
      <section id="about">
        <div className="container">
           <div className="profile-img">
            <img src={Profileimage} alt="Profile" />
           </div>
          
          <div className="about-content">
            <h2>About me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur lectus nec elit consequat, at ultrices mauris molestie. Integer dapibus tristique risus, id iaculis leo tincidunt non. Quisque sit amet tortor ac magna volutpat convallis. Duis malesuada congue enim, a efficitur lorem congue in. Nulla facilisi.</p>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;