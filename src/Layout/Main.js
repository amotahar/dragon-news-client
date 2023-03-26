import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
      <div>
      <Container>
      <Row>
         <Col>
            <h2>Left Side Nav</h2>
         </Col>
         <Col>
             <Outlet></Outlet>
         </Col>
         <Col>
            <h2>Right Side Nav</h2>
         </Col>
      </Row>
   </Container> 
      </div>
    );
};

export default Main;