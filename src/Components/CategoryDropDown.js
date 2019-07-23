import React from 'react'

let categories = ["Yard Work", "House Work", "Errands", "Misc"]

function CategoryDropDown(props){
  let categorie = categories.map((categorie, i) => {
    return(
      <option key={i} value={categorie}>{categorie}</option>
    )
  })
  return(
    <div>
      <form action=''>
        <select onClick={props.changeCategory}>
          {categorie}
        </select>
      </form>
    </div>
  )
}

export default CategoryDropDown