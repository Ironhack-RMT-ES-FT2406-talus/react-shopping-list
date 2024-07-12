import { useState } from "react"

function AddForm(props) {

  const [ nameInputValue, setNameInputValue ] = useState("")
  const [ price, setPrice ] = useState(0)

  const handleNameChange = (event) => {
    console.log(event.target.value)

    // let inputValue = event.target.value.toUpperCase()
    let inputValue = event.target.value

    setNameInputValue( inputValue )

  }

  const handlePriceChange = (event) => setPrice(Number(event.target.value))

  const handleAddProduct = (event) => {
    event.preventDefault() // detener cualquier ejecución automatica del formulario
    console.log("intentando entregar formulario y añadir producto")

    const newProduct = {
      name: nameInputValue,
      price: price,
      isPurchased: false
    }

    console.log(newProduct)

    // console.log(props.allProducts)

    //* opcion 1 dificil
    // const clone = [...props.allProducts]
    // clone.push(newProduct)
    // props.setAllProducts(clone)

    //* opcion 2 Más dificl
    // props.setAllProducts( [...props.allProducts, newProduct] )

    //* opcion 3 DIFICULTAD EXTREMA
    props.setAllProducts( (valorActualDelEstado) => {
      // return elNuevoValorDelEstado
      return [...valorActualDelEstado, newProduct]
    } )

  }

  return (
    <div className="add-form container">
      
      <h2>Add Form</h2>

      <form onSubmit={ handleAddProduct }>

        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" onChange={ handleNameChange } value={nameInputValue}/>
        </div>

        <div>
          <label htmlFor="price">Price: </label>
          <input type="number" name="price" onChange={handlePriceChange} value={price}/>
        </div>

        <button>Add</button>

      </form>

    </div>
  )
}

export default AddForm