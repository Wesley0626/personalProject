import React from 'react'

function DoerSignup(props){
  let {skills, certs, tools} = props
  return(
<div>
    <div>
      Skills: {' '}
      <input 
      placeholder="Skills"
      value={skills}
      name='skills'
      onChange={props.handleChange}
      />
      Certifications: {' '}
      <input 
      placeholder="Certifications"
      value={certs}
      name='certs'
      onChange={props.handleChange}
      />
      Tools: {' '}
      <input 
      placeholder="Tools Available"
      value={tools}
      name='tools'
      onChange={props.handleChange}
      />
    </div>
</div>
  )
}

export default DoerSignup