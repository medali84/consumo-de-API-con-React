import React, { useEffect, useState } from 'react';

import "../componentes/ListaProductos.css"
import Navbar from './Navbar';
import Footer from './Footer';




export const Hombre = () => {
  const [productos, setProductos] = useState([]);


  const obtenerProductos = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/category/men's clothing");
      const data = await response.json();
      setProductos(data);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <>
      {productos.map((producto) => (
        <div className="contenedor-productos" key={producto.id}>
          <figure className="contenedor-img">
            <img src={producto.image} alt={producto.title} />
          </figure>
          <div className="info-product">
            <h3 className='titulo-product'>{producto.title}</h3>
            <p className="precio">€ {producto.price}</p>
            <button>Añadir al carrito</button>
          </div>
        </div>
      ))}
       <Footer /> 
    </>
  )
};

export default Hombre ;