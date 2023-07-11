import { createBrowserRouter } from "react-router-dom"
import ListaProductos from "./ListaProductos";
import Joyeria from "./Joyeria";
import Mujer from "./Mujer";
import Electrodomesticos from "./Electrodomesticos";
import Hombre from "./Hombre";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <ListaProductos />,
      children: [
        {
        path: "/Joyeria",
        element: <Joyeria />,
        
      },
      {
        path: "/Mujer",
        element: <Mujer />,
        
      },
      {
        path: "/Electrodomesticos",
        element: <Electrodomesticos />,
        
      },
      {
        path: "/Hombre",
        element: <Hombre />,
        
      },
      ]
      
    },
    
  ]);