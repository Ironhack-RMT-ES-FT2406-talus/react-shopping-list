import { useState } from "react";

import AddForm from "../components/AddForm";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";

// this data is just for testing the initial rendering of data
import testProducts from "../data/testProducts.json";

function ShoppingList() {
  
  // initial state. change to empty array when done with add functionality
  const [ allProducts, setAllProducts ] = useState([]) 
  // const [ productsToDisplay, setProductsToDisplay ] = useState(testProducts) 
  
  const [ searchValue, setSearchValue ] = useState("")

  return (
    <>

      <h1>Shopping List</h1>

      {/* <AddForm allProducts={allProducts} setAllProducts={setAllProducts}/> */}
      <AddForm setAllProducts={setAllProducts}/>

      {/* <SearchBar allProducts={allProducts} setAllProducts={setProductsToDisplay}/> */}
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>

      <ProductList allProducts={allProducts} searchValue={searchValue} setAllProducts={setAllProducts}/>

    </>
  )
}

export default ShoppingList