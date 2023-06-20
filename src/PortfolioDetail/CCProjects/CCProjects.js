import React from 'react'
import "../../PortfolioDetail/Portfolio.css"
import Drone from './Drone'
import Coil  from './Coil' 

function CCProjects() {
  return (
    <>
    <div className='ccProjects'>
        <hr/>
        <h1>Projects at Community College</h1>
        <Drone/>
        <Coil/>
    </div>
    </>
  )
}

export default CCProjects