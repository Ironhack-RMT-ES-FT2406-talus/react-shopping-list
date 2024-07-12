function ProductCard(props) {

  const { name, price, isPurchased } = props.eachProduct
  
  const handlePurchaseProduct = () => {
    console.log("intentando comprar producto", props.index, name)

    props.setAllProducts((allProducts) => {
      console.log(allProducts)

      const clone = [...allProducts]
      clone[props.index].isPurchased = true

      return clone // el nuevo valor del estado
    })
  }
  
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>{price}€</p>
      <p>{isPurchased === true ? "✅" : "🟡"}</p>
      <button onClick={handlePurchaseProduct} disabled={isPurchased}>Buy</button>
    </div>
  );
}

export default ProductCard;
