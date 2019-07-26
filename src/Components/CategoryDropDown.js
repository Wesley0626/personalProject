import React from 'react'

let categories = ["Pick Category", "Yard Work", "House Work", "Errands", "Misc"]

function CategoryDropDown(props){
  let category = categories.map((categorie, i) => {
    return(
      <option name="newCategory" key={i} value={categorie}>{categorie}</option>
    )
  })
  return(
    <div>
      <form action=''>
        <select onChange={props.changeCategory}>
          {category}
        </select>
      </form>
    </div>
  )
}

export default CategoryDropDown