import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown'


class FrmLogin extends React.Component{
  constructor(props) {
    super(props);
    this.state = {"dropdownVrstaPrijave": "VETS-servisi"};
  }

  onSelect = eventkey => {
    alert(`you chosen: ${eventkey}`);
    this.setState({dropdownVrstaPrijave: {eventkey}});
  };


  render(){return (
    <Container className="p-3">
    <Form>
      <Form.Row>
        <Col>
          <Form.Group controlId="frmLoginUsername">
            <Form.Label>Корисничко име</Form.Label>
            <Form.Control type="username" placeholder="Корисничко име"/>
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Group controlId="frmLoginPassword">
            <Form.Label>Лозинка</Form.Label>
            <Form.Control type="password" placeholder="Лозинка" />
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Row>
        <Col xs={4}>
          <Button variant="primary" type="submit">
              Пријава
          </Button>
        </Col>
        <Col xs={{offset:4}}>
        <Button variant="outline-secondary" type="reset" >
            Одустани
          </Button>
        </Col>
      </Form.Row>
      <hr/>
      <Form.Row>
        <Col>
          <Form.Group variant="primary">
            <Form.Label>Врста пријаве</Form.Label>
            <Dropdown onSelect={this.onSelect}>
                <Dropdown.Toggle variant="outline-info" id="dropdownVrstaPrijave" xs={6} >
                  Одабрати тип повезивања
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">VETS-servisi</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">VETStest-servisi</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group variant="primary" >            
            <Form.Label className="d-block">Odabrano</Form.Label>
            <Form.Label>vrednost koja je odabrana</Form.Label>
          </Form.Group>
        </Col>
      </Form.Row>
    </Form>
    
    </Container>
  )}
}

export default FrmLogin;


