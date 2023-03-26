import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <Container>
        <Row>
           <Col lg="2">
              <h2>This is left</h2>
           </Col>
           <Col lg="7">
              <Outlet></Outlet>
           </Col>
           <Col lg="3">
           <h2>This is Right</h2>
           </Col>
        </Row>
     </Container>
    );
};

export default Main;