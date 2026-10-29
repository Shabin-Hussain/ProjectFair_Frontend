import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col, Row } from "react-bootstrap"
import titleimage from '../src/assets/circle-png-44656.png'



function Home() {
  return (
    <>
    <div className='container-fluid bg-success' style={{height:'100vh'}}>
      <Row className="align-items-center p-3 p-md-5">
        <Col xs={12} md={6} className="ps-5">
        <h1 className='text-white' style={{fontSize:'70px'}}>Project Fair</h1>
        <p className="mt-4">One stop destination for allsoftware development projects</p>
        <button className='btn btn-warning mt-4'>Get Started<FontAwesomeIcon icon={faArrowRight} className='ms-2'/></button>
        <button className='btn btn-warning mt-4'>Manage Project<FontAwesomeIcon icon={faArrowRight} className='ms-2'/></button>
        </Col>
        <Col xs={12} md={6}>
        <img src={titleimage} alt="no image" className="w-75" style={{marginTop:'100px'}}/>
        </Col>
      </Row>

    </div>
    </>
  )
}

export default Home