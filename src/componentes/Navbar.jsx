import React from 'react';
import Joyeria from './Joyeria';

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="http://localhost:5173/">
          <img src="src/componentes/logo-web.png" width="240" height="140" alt="Logo Mohamed Ali" />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="http://localhost:5173/">
            Home
          </a>


          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              Categorias
            </a>

            <div className="navbar-dropdown">
              <a className="navbar-item" href='/Electrodomesticos'>
                Electrodomesticos
              </a>
              <a className="navbar-item" href='/Joyeria' >
               Joyería
               
                
              </a>
              <a className="navbar-item" href='/Hombre'>
                Hombre
                
              </a>
              <a className="navbar-item" href='/Mujer'>
               Mujer
                
              </a>
             
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary" href="https://factoriaf5.org/contacto/"> 
                <strong>Contacto</strong>
              </a>
              <a className="button is-light" href="https://www.teaming.net/factoriaf5"> 
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    
    
  );
};

export default Navbar;
