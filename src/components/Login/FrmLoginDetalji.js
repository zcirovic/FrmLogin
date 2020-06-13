import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown'
import FormGroup from 'react-bootstrap/FormGroup';


class FrmLoginDetalji extends React.Component{
  render(){return (
  <Form> 
    <Form.Row>
      <Col>
        <Dropdown >
          <Dropdown.Toggle variant="outline-info" id="dropdown-basic" xs={6}>
            Одабрати тип повезивања
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">VETS-servisi</Dropdown.Item>
            <Dropdown.Item href="#/action-2">VETStest-servisi</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>

    </Form.Row>
  </Form>
  )}
}


export default FrmLoginDetalji;
