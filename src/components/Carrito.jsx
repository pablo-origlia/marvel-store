import { Button, Col, Form, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';

const Carrito = ({ changuito, agregarProducto }) => {
  // Calculo el total del changuito mapeando la cantidad * precio y luego reduciendo como en Programacion Funcional con foldl
  var total = Math.round(changuito.map((p) => p.precio * p.cantidad).reduce((acc, curr) => acc + Number(curr), 0) * 100) / 100;
  var total_cantidad = changuito.map((p) => p.cantidad).reduce((acc, curr) => acc + Number(curr), 0);
  // Funcion para comprar un producto
  const cambiarCantidad = (cantidad, id) => {
    const producto = changuito.find((p) => p.id === id);
    eliminarProducto(id);
    producto.cantidad = cantidad;
    const changuitoNuevo = changuito;
    agregarProducto([...changuitoNuevo]);
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
    <div className='home'>
      <div className='contenedorProductos'>
        <ListGroup>
          {changuito.map((p) => (
            <ListGroupItem key={p.id}>
              <Row>
                <Col md={2}>
                  <Image
                    src={p.imagen}
                    alt={p.nombre}
                    fluid
                    rounded
                  />
                </Col>
                <Col md={2}>
                  <span>{p.nombre}</span>
                </Col>
                <Col md={2}>$ {p.precio}</Col>
                <Col md={2}>
                  <Form.Select
                    value={p.cantidad}
                    onChange={(e) => cambiarCantidad(e.target.value, p.id)}
                  >
                    {[1, 2, 3, 4, 5, 6].map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </Form.Select>
                </Col>
                <Col md={2}>
                  <Button
                    type='button'
                    variant='light'
                    onClick={() => eliminarProducto(p.id)}
                  >
                    <AiFillDelete fontSize='20px' />
                  </Button>
                </Col>
              </Row>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
      <div className='filtros totales'>
        <span className='titulo'>Subtotal {total_cantidad} productos</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: $ {total}</span>
        <Button
          type='button'
          disable={changuito.length === 0}
        >
          Continuar en Pedidos Ya
        </Button>
      </div>
    </div>
  );
};

export default Carrito;
