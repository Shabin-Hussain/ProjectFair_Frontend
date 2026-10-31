import React from 'react'
import AddProject from '../components/AddProject'

function Myproject() {
  return (
    <div className='shadow p-3 rounded'>
      <div className='d-flex'>
        <h4 className='text-success'>My Project</h4>
        <AddProject/>

      </div>

    </div>
  )
}

export default Myproject