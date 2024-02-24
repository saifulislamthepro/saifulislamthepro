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
            <p>I have many skills and it makes me feel confident, So I want to learn more
              .I enjoy learning constantly new staffs so it building my knowladge.
              I will help anyone who wants to build there career in online platforms.
              So lets get started to explore the e world.

            </p>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;