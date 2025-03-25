import React from 'react';
import Spline from '@splinetool/react-spline';

const About = () => {
  return (
    <section className="">
      <div className="container pb-3 border rounded">
        <h2 className="pt-4 pb-4">About Me</h2>
        <p>Hey there!<br /> <br/>
        My name is Thomas and I'm thrilled to have you visiting my portfolio-website!<br />
        If you haven't already, feel free to check out some of the projects I have worked on.
        I am currently finishing a Boot camp at Altcademy where I have been learning to become a Fullstack Web-Developer!<br /> <br />
        I have recently completed a Frontend Development Traineeship at Kreativstorm and am looking for jobs within Web Development.
        During my boot camp, I’ve developed strong skills in both front-end and back-end development. I’ve built full-stack applications such as a fully functioning Airbnb clone using Ruby on Rails and ReactJS in a monolithic architecture. <br /> <br />
        Most recently, I created a financial portfolio manager as my capstone project – combining Ruby on Rails and ReactJS with a Python-based financial sentiment analyzer using FastAPI and OpenAI’s LLMs.
        In my previous role at Kreativstorm, I gained valuable experience working with clients and collaborating with other developers using Git for version control.</p>
        <div id="spline-container">
          <Spline scene="https://prod.spline.design/UlCAiLjoO4wFGTDj/scene.splinecode" />
        </div>
      </div>
    </section>
    
  );
};

export default About;
