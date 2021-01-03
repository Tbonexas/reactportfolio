import React from 'react';
import Info from '../components/Info';
import Carousel from "../components/Carousel"


// don't need states for home page // 
function HomePage(props) {
  return (
    <div>
      <Info title={props.title} subtitle={props.subtitle} text={props.text} />
      <Carousel />
    </div>
  )
}

export default HomePage;