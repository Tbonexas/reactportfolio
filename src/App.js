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
import ContactPage from "./pages/ContactPage";


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
        text: "Here are my projects below:"
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
      
      <Navbar className="border-bottom" bg="transparent" expand="lg">
      <Navbar.Brand>Todd M. Wayment</Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar-toggle" />
      <Navbar.Collapse id="navbar-toggle">
        <Nav className="ml-auto">
          <Link className="nav-link" to='/'>Home</Link>
          <Link className="nav-link" to='/about'>Profile</Link>
          <Link className="nav-link" to='/contact'>Contact me</Link>
          {/* <Link className="nav-link" href='https://github.com/tbonexas'>My GitHub</Link> */}
          

        </Nav>
      </Navbar.Collapse>
      </Navbar>

      <Route path='/' exact render={() => <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text} />} />
      <Route path='/about' render={() => <AboutPage title={this.state.about.title} /> } />
      <Route path='/contact' render={() => <ContactPage title={this.state.contact.title} /> } />
      <Footer />
      </Container>


    </Router>
  );
 }
}




export default App;
