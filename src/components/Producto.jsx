import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Producto = ({ producto, productos, changuito, agregarProducto }) => {
  // Funcion para comprar un producto
  const seleccionarProducto = (id) => {
    const producto = productos.find((p) => p.id === id);

    if (changuito.some((p) => p.id === id)) {
      const productoEnChango = changuito.find((p) => p.id === id);
      productoEnChango.cantidad += 1;
      agregarProducto(changuito);
    } else {
      producto.cantidad = 1;
      agregarProducto([...changuito, producto]);
    }
    console.log(changuito);
  };

  // Funcion para quitar un producto
  const eliminarProducto = (id) => {
    const producto = changuito.find((p) => p.id === id);

    if (producto.cantidad === 1) {
      producto.cantidad = 0;
      const changuitoNuevo = changuito.filter((p) => p.id !== id);
      agregarProducto(changuitoNuevo);
    } else {
      producto.cantidad -= 1;
      const changuitoNuevo = changuito;
      agregarProducto([...changuitoNuevo]);
    }
    //console.log(changuito);
  };

  return (
    <div className='productos'>
      <Card>
        <Card.Img
          variant='top'
          src={producto.imagen}
          alt={producto.nombre}
        />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Subtitle style={{ paddingBootom: 10 }}>
            <span>$ {producto.precio}</span>
            {producto.envioExpress ? <div>Envio Express</div> : <div>Llega en 4 días</div>}
          </Card.Subtitle>
          {changuito.some((p) => p.id === producto.id) ? (
            <Button
              onClick={() => eliminarProducto(producto.id)}
              variant='danger'
            >
              Quitar del carrito
            </Button>
          ) : (
            <Button
              onClick={() => seleccionarProducto(producto.id)}
              disabled={!producto.enStock}
            >
              {!producto.enStock ? 'Sin stock' : 'Agregar al carrito'}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Producto;
