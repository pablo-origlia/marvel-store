import React from 'react';

import Producto from './Producto';
import './estilos.css';

const Home = ({ personajes, changuito, agregarProducto }) => {
  /*  
  const productos = [
    { id: 121, nombre: 'hola', imagen: 'hola.jpg', enStock: true },
    { id: 122, nombre: 'chau', imagen: 'hola3.jpg', enStock: true },
    { id: 123, nombre: 'hola2', imagen: 'hola4.jpg', enStock: false },
    { id: 124, nombre: 'chau2', imagen: 'hola5.jpg', enStock: true },
  ];
  */

  return (
    <div className='home'>
      <div className='contenedorProductos'>
        {personajes.map((p) => {
          return (
            <Producto
              key={p.id}
              producto={p}
              productos={personajes}
              changuito={changuito}
              agregarProducto={agregarProducto}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
