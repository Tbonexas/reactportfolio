import React from 'react';

import Card from "../components/Card"

// Photo imports for Carousel // 
import hub from "../assets/images/hub.jpg"
import linked from "../assets/images/linked.jpg"
import facebook from "../assets/images/facebook.JPEG"
import { Container, Row } from 'react-bootstrap';


class Carousel extends React.Component {
    
    
    constructor(props) {
        super(props);
        this.state= {
            items: [
                {
                    id: 0,
                    title: "GitHub",
                    subtitle: "My projects and repositories!",
                    imgSrc: hub,
                    link: 'https://github.com/Tbonexas',
                    selected: false
                },
               
                {
                    id: 1,
                    title: "Facebook",
                    subtitle: "Feel free to contact me on facebook messenger!",
                    imgSrc: linked,
                    link: 'https:facebook.com/toddwayment',
                    selected: false
                   
                   
                },

                {
                    
                    id: 2,
                    title: "Resume",
                    subtitle: "Take a look at my Resume on LinkedIn!",
                    imgSrc: facebook,
                    link: 'https://www.linkedin.com/in/todd-murdoch',
                    selected: false
                },
            ]
        }
    }

// Creates a click method for the carousel links with a spread operator for items - items selcted false or true to toggle information//     
    handleCardClick = (id, card) => {
// Console log to check the ID upon click // 
        // console.log(id); 


        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;
// create a loop for the ones not selected // 
        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

// set the state //   
        this.setState ({
            items
        });
    }


// create a method that creats a card component for each item // 
        makeItems = (items) => {
            return items.map(item => {
                return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
            })
        }

// run the method // 
    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel;