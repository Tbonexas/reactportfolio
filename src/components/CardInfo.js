import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props){
// this hold react spring styles // 
    const style = useSpring({opacity: 1, from: {opacity:0}})

    return(
        <animated.div className="t-card-info" style={style}>
            <p className="t-card-title">{props.title}</p>
            <p className="t-card-sub-title">{props.subtitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">Visit</a>
        </animated.div>
    )
}

export default CardInfo;