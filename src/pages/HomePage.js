import React from 'react';
import Info from '../components/Info';


// don't need states for home page // 
function HomePage(props) {
  return (
      <Info title={props.title} subtitle={props.subtitle} text={props.text}/>
  )
}

export default HomePage;