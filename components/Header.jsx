import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



function Header({dash}) {
  return (
    <>
      <Navbar className="bg-success">
        <Container>
          <Navbar.Brand href="/">
           <FontAwesomeIcon icon={faStackOverflow} className='fa-2x me-3'/>
            Project Fair
          </Navbar.Brand>
          {dash && <button className='btn btn-warning'><FontAwesomeIcon icon={faPowerOff} />Logout</button>}
        </Container>
      </Navbar>
    </>
  )
}

export default Header