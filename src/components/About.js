import React from 'react';
import Spline from '@splinetool/react-spline';

const About = () => {
  return (
    <section className="">
      <div className="container pb-3 border rounded">
        <h2 className="pt-4 pb-4">About Me</h2>
        <p>
          Hey there!<br /> <br />
          My name is Thomas and welcome to my portfolio website! I currently work as a Partner Connectivity Specialist at HomeToGo, where I help ensure smooth integrations between our partners' systems and the HomeToGo platform.<br /> <br />

          In my free time, I work on full-stack development projects and continue growing my skills after completing a Full-Stack Web Development Bootcamp at Altcademy. I enjoy building practical tools that solve real business problems and experimenting with modern web technologies across React, Ruby on Rails, and Python.<br /> <br />

          One of my latest projects is <strong>FAQHelper</strong>, a white-label, multi-tenant SaaS tool designed to assist customer support teams. Instead of automatically generating responses, the built-in AI widget helps agents quickly find the correct FAQ entry or quicktext by understanding their natural language queries.  
          Companies can build their FAQ database either by bulk-uploading a CSV file — which converts each row into a FAQ/quicktext — or by adding entries manually within the system. The platform uses a ReactJS frontend, a Ruby on Rails backend, and Python-based AI services to match user queries to the most relevant support content.<br /> <br />

          I also built a full financial portfolio manager as my capstone project — combining Rails, ReactJS, and a FastAPI-powered sentiment analysis pipeline using OpenAI's LLMs to evaluate financial news in real time by scraping sources such as Yahoo Finance.<br /> <br />

          I'm passionate about creating meaningful tools, learning new technologies, and constantly pushing myself to grow as a developer.  
          My stance on AI is that it can be extremely useful when used responsibly — speeding up our work without compromising on quality.
        </p>


        <div id="spline-container">
          <Spline scene="https://prod.spline.design/UlCAiLjoO4wFGTDj/scene.splinecode" />
        </div>
      </div>
    </section>
    
  );
};

export default About;
