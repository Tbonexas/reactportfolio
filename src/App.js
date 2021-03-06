import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

// my imports
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";



class App extends React.Component {
  // constructor to get props // 
  constructor(props){
    super(props);
    // state for title in navbar top level of site //
    this.state ={
     title: 'Todd M. Wayment',
     headerLinks: [ // will have everything needed for my navbar // 
       { title: "Home", path: '/'},
       { title: "About", path: '/about'},
       { title: "Contact", path: '/contact'}
     ],
      home: {
        title: "Windows of Opportunity,",
        subtitle: "Always provide a refreshing breeze.",
        text: "Below is my information:"
      },
      about: {
        title: "Who I am and What I do:",
        
      },
      contact: {
        title: "Contact me",
        
      },
    }
  }

// using react bootstrap for nav bar and classes for links // 
// using react router to show when on a certain path to render the specified component.//
  render() {
  return (
  // create my render method // 
    <Router>
      <Container className="p-0"fluid={true}>
      
      <Navbar className="border-bottom" bg="transparent" expand="lg" bcClass="customNav">
      <Navbar.Brand>React Portfolio</Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar-toggle" />
      <Navbar.Collapse id="navbar-toggle">
        <Nav className="ml-auto">
          <Link className="nav-link" to='/reactportfolio'>Home</Link>
          <Link className="nav-link" to='/about'>Profile</Link>
          
         
          

        </Nav>
      </Navbar.Collapse>
      </Navbar>

      <Route path='/reactportfolio' exact render={() => <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text} />} />
      <Route path='/about' render={() => <AboutPage title={this.state.about.title} /> } />
      
      <Footer />
      </Container>


    </Router>
  );
 }
}




export default App;
