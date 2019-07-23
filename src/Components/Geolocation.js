import React, {Component} from 'react'


class Geolocation extends Component{
  constructor(){
    super()
  }  

  showPosition = (position) => {
    let lat= position.coords.latitude
    let lon = position.coords.longitude
  }
  

  
  render(){
    return(
      <div>
      </div>
    )
  }
}

export default Geolocation