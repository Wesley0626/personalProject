import React from 'react'

let categories = ["Pick Category", "Yard Work", "House Work", "Errands", "Misc"]

function CategoryDropDown(props){
  let categorie = categories.map((categorie, i) => {
    return(
      <option key={i} value={categorie}>{categorie}</option>
    )
  })
  return(
    <div>
      <form action=''>
        <select onChange={props.changeCategory}>
          {categorie}
        </select>
      </form>
    </div>
  )
}

export default CategoryDropDown