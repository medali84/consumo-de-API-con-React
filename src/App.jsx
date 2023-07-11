import { useState } from 'react'
import ListaProductos from './componentes/ListaProductos';
import "./Api.css"

import Navbar from './componentes/Navbar';
import Joyeria from './componentes/Joyeria';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='api'>
        <Navbar/>
        <ListaProductos />
        <footer/>
        
      </div>
    </>
      
    
  );
}

export default App
