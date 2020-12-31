import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Info (props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={false}>
                <Row classname="justify-content-center py-5">
                    <Col md={8} sm={12}>
                     { props.title && <h1>{props.title}</h1> }
                     { props.subtitle && <h3>{props.subtitle}</h3> }
                     { props.text && <h3>{props.text}</h3> }
                    </Col>
                </Row>
            </Container>

        </Jumbotron> 
    )

}


export default Info;