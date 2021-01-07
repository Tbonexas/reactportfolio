import React from 'react';
import AboutContent from '../components/AboutContent';

import '../index.css';
import Info from "../components/Info"

// don't need states for home page // 
function AboutPage(props) {
  return (
      <div id="aboutInfo">
        <Info title={props.title}/>

        <AboutContent>
          <h3 id="aboutHeader">My name is Todd Murdoch Wayment,</h3><br />
          <p className="infoText">I am currently studying full-stack programming at University of California Riverside. 
          I am knowledgeable full-stack development with JavaScript, Express JS, Node JS, MongoDB, React, and more.</p> <br />
          <p id="indent2">As a hard working father I am always driven to expand my knowledge with all things I love so the ones I love can live a happier, stress-free life. I strive to challenge myself 
          to learn more everyday. Upon my graduation in January 2021 I will be seeking a full-time career in programming. I have a come a long way from knowing very little in any aspect of coding, to having an acute 
          understanding that I feel confident with. I thank my instructor Farish Kashefinejad and my TA Juan Ruelas for my success in this course as well as the dedication I put forth. 
          I look forward to applying what I have learned both in the workplace and the world to hopefully see my work make others lives easier and happier. Feel free to take a look at my resume as well as my projects I have uploaded to my GitHub. 
          <br /></p>
         <p id="quote"> "Never close a window of opportunity, because it is always a refreshing breeze." </p>
        </AboutContent>

      </div>
  )
}

export default AboutPage;