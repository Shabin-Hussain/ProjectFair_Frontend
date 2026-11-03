import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Collapse from 'react-bootstrap/Collapse';

import { useState } from 'react';



function Profile() {
    const [open, setOpen] = useState(false);
  return (
    <>
    <div className='mx-3 p-4 shadow rounded' onMouseEnter={()=>setOpen(true)} /* onMouseLeave={()=>setOpen(false)} */>
      <div className='d-flex justify-content-between mt-3'>
        <h4 className='text-success'>Profile</h4>
        <button type='button' onClick={() => setOpen(!open)} className='btn btn-outline-info'>
          {!open ?<FontAwesomeIcon icon={faAngleDown} /> :
          <FontAwesomeIcon icon={faAngleUp} />}
          </button>
        

      </div>

     <Collapse in={open}>
       <div>
          <div className='d-flex justify-content-center align-items-center flex-column'>
            <label htmlFor="profileImg">
              <input id='profileImg' type="file" style={{display:'none'}} />
              <img src="https://static.vecteezy.com/system/resources/previews/055/428/287/non_2x/image-upload-icon-with-arrow-and-photo-design-vector.jpg" alt="no image" style={{width:'170px',height:'170px',borderRadius:'50%'}}/>
    
            </label>
    
            <form className='mt-4 w-100'>
              <div className='mb-3'>
                  <input type="text" className='form-control' placeholder='Github'/>
              </div>
               <div className='mb-3'>
                  <input type="text" className='form-control' placeholder='Linkedin'/>
              </div>
               <div className='mb-3'>
                  <button className='btn btn-success w-100'>Update</button>
              </div>
            </form>
    
          </div>
       </div>
     </Collapse>

    </div>
    </>
  )
}

export default Profile