import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col, Row } from "react-bootstrap"
import titleimage from '../src/assets/circle-png-44656.png'
import ProjectCard from '../components/ProjectCard'
import { Link } from "react-router-dom"




function Home() {
  return (
    <>
    <div className='container-fluid bg-success' style={{height:'100vh'}}>
      <Row className="align-items-center p-3 p-md-5">
        <Col xs={12} md={6} className="ps-5">
        <h1 className='text-white' style={{fontSize:'70px'}}>Project Fair</h1>
        <p className="mt-4">One stop destination for allsoftware development projects</p>
        <Link to={'/login'}><button className='btn btn-warning mt-4'>Get Started<FontAwesomeIcon icon={faArrowRight} className='ms-2'/></button></Link>
       <Link to={'/dashboard'}> <button className='btn btn-warning mt-4'>Manage Project<FontAwesomeIcon icon={faArrowRight} className='ms-2'/></button></Link>
        </Col>
        <Col xs={12} md={6}>
        <img src={titleimage} alt="no image" className="w-75" style={{marginTop:'100px'}}/>
        </Col>
      </Row>

    </div>

    <div className="container-fluid">
      <h1 className="mt-5 text-center">Explore Our Projects</h1>
      <div className="row mt-5">
        <div className="col-md-4 p-4">
          <ProjectCard/>
        </div>

          <div className="col-md-4 p-4">
          <ProjectCard/>
        </div>

          <div className="col-md-4 p-4">
          <ProjectCard/>
        </div>
      </div>
      <Link to={'/project'} className="text-center text-danger"><h5>See More Projects</h5></Link>

    </div>
    </>
  )
}

export default Home