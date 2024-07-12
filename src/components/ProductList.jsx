import ProductCard from "./ProductCard";

function ProductList(props) {
  return (
    <div className="product-list container">
      
      <h2>Product List</h2>

      {/* the list of the products will be here */}
      {/* it will render a ProductCard for each product in the list */}
      {/* all elements of the shopping list will be here */}

      {props.allProducts
      .filter((eachProduct) => {
        // return eachProduct.name.includes(props.searchValue)
        return eachProduct.name.toLowerCase().includes(props.searchValue.toLowerCase())
      })
      .map((eachProduct, index) => {
        return (
          <ProductCard key={index} eachProduct={eachProduct} index={index} setAllProducts={props.setAllProducts}/>
        )
      })}

    </div>
  )
}

export default ProductList