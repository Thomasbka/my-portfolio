import React from 'react';
import Spline from '@splinetool/react-spline';

const About = () => {
  return (
    <section className="">
      <div className="container pb-3 border rounded">
        <h2 className="pt-4 pb-4">About Me</h2>
        <p>Hi!<br /> <br/>
        My name is Thomas and I'm thrilled to have you visiting my portfolio-website!<br />
        If you haven't already, feel free to check out some of the projects I have worked on.
        I am currently enrolled in a Bootcamp at Altcademy where I am learning to become a Fullstack Web-Developer!<br /> <br />
        I have recently completed a Frontend Development Traineeship at Kreativstorm and am looking for a job within frontend development.
        So far I have learned a lot about front-end and have become very secure in this craft. <br/><br />
        Soon I will be able to handle the back-end of things as well and am looking forward to working on exciting projects in both fields! <br /> 
        Apart from being Web-Developer I am also a Music Producer.<br /> 
        <br />
        Music has always been a big part of my life. I learned to play the guitar when I was 8 years old and haven't stopped making music since.<br /> If you are curious to what kind of music I make you can check out an artist called Novine whom I am the main producer for.</p>
        <div id="spline-container">
          <Spline scene="https://prod.spline.design/UlCAiLjoO4wFGTDj/scene.splinecode" />
        </div>
      </div>
    </section>
    
  );
};

export default About;
