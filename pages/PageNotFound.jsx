import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function PageNotFound() {
  return (
    <>
    
    <div className='container-fluid bg-white' style={{minHeight:'100vh'}}>
            <div className="row ">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div style={{width:'100%'}} className='d-flex justify-content-center align-items-center flex-column'>
                        <img src="https://cdn.dribbble.com/userupload/20420676/file/original-aac8f7f838812fa53cd92617fad5f892.gif" alt="no image" width={'100%'} />
                        <h1 className='text-primary'>Look's like you're Lost</h1>
                        <button className='btn btn-success mt-3'><FontAwesomeIcon icon={faArrowLeft} className='me-2'/>Back Home</button>
        
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
       </div>

    </>
  )
}

export default PageNotFound