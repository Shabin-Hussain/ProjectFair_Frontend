import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'




function Auth() {
  return (
   
      <div className='container-fluid justify-content-center align-items-center flex-column ' style={{ height: '100vh' }}>
        <div className='container w-75'>
          <Link to={'/'} className='text-warning fs-5' style={{ textDecoration: 'none' }}><FontAwesomeIcon icon={faArrowLeft} className='me-3' />Back to Home</Link>


          <div className=' bg-success p-3 mt-2 rounded'>
            <Row>
              <Col sm={12} md={6} className='p-5 d-flex justify-content-center align-items-center'>
                <img src="https://cdn-icons-gif.flaticon.com/17905/17905764.gif" alt="no image" className='w-75' />
              </Col>
              <Col sm={12} md={6} className='d-flex justify-content-center align-items-center flex-column text-white'>
                 <h3><FontAwesomeIcon className='me-3' icon={faStackOverflow} />Project Fair</h3>
                 <h5>Sign Up to your Account</h5>
                 <h5>Sign In to your Account</h5>

                 <form className='mt-4 w-75'>
                  <div className='mb-3'>
                    <input type="text" placeholder='Username' className='form-control'/>
                  </div>
                  <div className='mb-3'>
                     <input type="mail" placeholder='Email' className='form-control'/>
                  </div>
                  <div className='mb-3'>
                     <input type="password" placeholder='Password' className='form-control'/>
                  </div>
                  <div className='mb-3'>
                    <button className='btn btn-warning w-100'>Register</button>
                    <p>Already a User?Click here to <Link to={'/login'} className='text-danger'>login</Link></p>
                    <button className='btn btn-warning w-100'>Login</button>
                    <p>New User?Click here to <Link to={'/register'} className='text-danger'>register</Link></p>
                  </div>

                 </form>

              </Col>

            </Row>
          </div>
        </div>
      </div>
   
  )
}

export default Auth