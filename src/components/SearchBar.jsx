import { useState } from "react"

function SearchBar(props) {

  const handleInputChange = (event) => {
    props.setSearchValue(event.target.value)

    // filtrar
    // const filteredArr = props.allProducts.filter((eachProduct) => {
    //   // en el .filter SIEMPRE debemos retornar o true o false
    //   return eachProduct.name.includes(event.target.value)
    // })

    // console.log(filteredArr)
    // props.setAllProducts(filteredArr)

  }

  // ???

  return (
    <div className="search-bar container">
      
      <h2>Search Bar</h2>
        
      <input type="text" onChange={handleInputChange} value={props.searchValue}/>

    </div>
  )
}

export default SearchBar