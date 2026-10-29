
import { faFacebook, faInstagram, faLinkedin, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'





function Footer() {
  return (
    <div className='container-fluid'>
        <div className='row  mt-5 p-3 bg-success'>
              <div className="col-md-4 p-4 ms-md-5">
                  <h4 className='text-white'><FontAwesomeIcon icon={faStackOverflow} className='me-2 fs-2'/>Project Fair</h4>
                  <p style={{textAlign:'justify'}} className='mt-4'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores delectus quidem, sunt vel ad unde architecto vero non velit molestiae inventore? Velit inventore perspiciatis tenetur. Minima placeat doloremque nisi dolores?
                  </p>
              </div>
              <div className="col-md-2 p-4 d-md-flex justify-content-center"> {/* justify-horiz */}
  
                  <div >
                      <h4>Links</h4>
                      <p className='mt-4'><Link to={'/'} className='text-white' style={{textDecoration:'none'}}>Home Page</Link></p>
                      <p><Link to={'/project'} className='text-white' style={{textDecoration:'none'}}>Project Page</Link></p>
                      <p><Link to={'/dashboard'} className='text-white' style={{textDecoration:'none'}}>Dashboard</Link></p>
                  </div>
  
              </div>
              <div className="col-md-2 p-4">
                  <h4>Guides</h4>
                  <p className='mt-4'>React</p>
                  <p>React Bootstrap</p>
                  <p>Bootswatch</p>
  
              </div>
              <div className="col-md-3 p-4">
                  <h4>Contact Us</h4>
                  <div className='d-flex mt-4'>
                      <input type="text" className='form-control' placeholder='Email Id'/>
                      <button className='btn btn-warning ms-3'>Subscribe</button>
  
                  </div>
  
                  <div className="d-flex mt-4 justify-content-between">
                      <FontAwesomeIcon icon={faInstagram} size='2xl' />
                      <FontAwesomeIcon icon={faFacebook} size='2xl'/>
                      <FontAwesomeIcon icon={faTwitter}  size='2xl'/>
                      <FontAwesomeIcon icon={faLinkedin} size='2xl' />
  
                  </div>
              </div>
              <div className="col-md-1"></div>
  
          </div>
    </div>
  )
}

export default Footer