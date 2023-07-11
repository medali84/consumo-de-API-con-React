/* import React, { useEffect, useState } from 'react'
import Paginacion from './paginacion';

export const ListaProductos = () => {
  const [productos, setProductos] = useState([])
  const [productosPorPag, setproductosPorPag] = useState(6)
  const [pagActual, setPagActual] = useState(1)

  const ListaProductos = async() => {
    const data = await fetch("https://fakestoreapi.com/products")
    const productos = await data.json()
    setProductos(productos)

  }
  useEffect(() => {

    ListaProductos()
  }, [])

  return (
    <>
    <div className="contenedor-productos">
        <figure className='contenedor-img' >
            <img src={product.image} alt={product.title} />
        </figure>
        <div className="info-product">
            <h3>{product.title}</h3>
            <p className='precio'> {product.prece}</p>
            <button>Añadir al carrito</button>
        </div>
    </div>
    <Paginacion/>
    </>
  )
};

export default ListaProductos */

