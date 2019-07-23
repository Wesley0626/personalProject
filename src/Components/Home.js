import React from 'react'
import {Link} from 'react-router-dom'


function Home(){
  return(
    <div>
      <button><Link to='/createjob'>Post a Job</Link></button>
    </div>
  )
}

export default Home