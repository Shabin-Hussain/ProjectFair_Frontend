import React from 'react'
import Card from 'react-bootstrap/Card';
import ProjImg from '../src/assets/Screenshot 2026-10-30 142910.jpg'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Card style={{ width: '100%' }} className='shadow' onClick={handleShow}>
      <Card.Img variant="top" src={ProjImg} />
      <Card.Body>
        <Card.Title className='text-center'>Media Player</Card.Title>
      </Card.Body>
    </Card>


     <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Media Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
            <Row>
              <Col sm={12} md={6}>
              <img src={ProjImg} alt="no image" width={'100%'}/>
              </Col>
              <Col sm={12} md={6}>
              <h4>Description:</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam aspernatur voluptates aperiam tenetur quos ducimus accusamus placeat explicabo hic consectetur. Ipsam tempore accusamus consectetur officia, magni eligendi quaerat ducimus unde. Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
              <h4 className='mt-3'>Technologies:</h4>
              <p>React</p>
              </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-start'>
          <Link to={''}><FontAwesomeIcon icon={faGithub} className='fa-2x'/></Link>
          <Link to={''}><FontAwesomeIcon icon={faLink} className='fa-2x ms-4'/></Link>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ProjectCard