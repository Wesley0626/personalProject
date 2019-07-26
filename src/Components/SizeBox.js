import React from 'react'

function SizeBox(props){
  return(
    <div>
      <form action='' >
        <fieldset>
          <select onChange={props.change}>
            <option >Select Size</option>
            <option name="newSize" value="Small">Small</option>
            <option name="newSize" value='Medium'>Medium</option>
            <option name="newSize" value='Large'>Large</option>
            <option name="newSize" value='Extra Large'>Extra Large</option>
            <option name="newSize" value='N/A'>N/A</option>
          </select>
        </fieldset>
      </form>
    </div>
  )
}

export default SizeBox