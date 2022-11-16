import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Carrito from './components/Carrito';
import md5 from 'md5';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';

/*
Authentication for Server-Side Applications
Server-side applications must pass two parameters in addition to the apikey parameter:

ts - a timestamp (or other long string which can change on a request-by-request basis)
hash - a md5 digest of the ts parameter, your private key and your public key (e.g. md5(ts+privateKey+publicKey)

For example, a user with a public key of "1234" and a private key of "abcd" could construct a valid call as follows: http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150 (the hash value is the md5 digest of 1abcd1234)

https://gateway.marvel.com:443/v1/public/characters?apikey=

*/

function App() {
  // Iniciamos el almacenamiento en la cache del navegador.
  // local storage del changuito
  let changuito_Marvel = JSON.parse(localStorage.getItem('changuito-Marvel'));

  if (!changuito_Marvel) {
    changuito_Marvel = [];
  }
  // Creamos nuestro carrito de compra.
  const [changuito, agregarProducto] = useState(changuito_Marvel);
  // Creamos nuestra lista de productos.
  const [personajes, setPersonajes] = useState([]);

  // El hook useEffect sirve para ejecutar cosas cuando cambia el estado de un elemento
  useEffect(() => {
    if (changuito_Marvel) {
      localStorage.setItem('changuito-Marvel', JSON.stringify(changuito));
    } else {
      localStorage.setItem('changuito-Marvel', JSON.stringify([]));
    }
  }, [changuito_Marvel, changuito]);

  // Creamos el hook que por medio de la API obtendrá los productos para nuestra lista.
  useEffect(() => {
    const getPersonajes = async function (limit, offset) {
      const pageLimit = limit || 50;
      const pageOffset = offset || 0;
      const timestamp = Date.now().toString();

      const hash = md5(timestamp + process.env.REACT_APP_MARVEL_PRIVATE_KEY + process.env.REACT_APP_MARVEL_PUBLIC_KEY);

      const apiUrl = 'https://gateway.marvel.com:443/v1/public/characters?&ts=' + timestamp + '&apikey=' + process.env.REACT_APP_MARVEL_PUBLIC_KEY + '&hash=' + hash + '&limit=' + pageLimit + '&offset=' + pageOffset;

      console.log(apiUrl);

      const api = await fetch(apiUrl);
      const response = await api.json();

      const data = response.data.results
        // Filtro los pesonajes que no tiene imagen asociada
        .filter((p) => !p.thumbnail.path.includes('image_not_available'))
        // Genero el array con los datos a utilizar en la visualización
        .map((p) => {
          return {
            id: p.id,
            nombre: p.name,
            descripcion: p.description,
            imagen: p.thumbnail.path + '.' + p.thumbnail.extension,
            // Precio aleatorio entre 10.00 y 100.00
            precio: Math.round(1000 + Math.random() * (10000 - 1000)) / 100,
            // Booleano con 70% de chance
            enStock: Math.random() < 0.7,
            // Booleano con 20% de chance
            envioExpress: Math.random() < 0.2,
          };
        });
      console.log('data', data);
      //set Personajes en el hook State de la lista de productos
      setPersonajes(data);
    };
    getPersonajes(51, 6);
  }, []);

  return (
    <BrowserRouter>
      <Header
        changuito={changuito}
        agregarProducto={agregarProducto}
      />

      <Routes>
        <Route
          exact
          path='/'
          element={
            <Home
              personajes={personajes}
              changuito={changuito}
              agregarProducto={agregarProducto}
            />
          }
        />
        <Route
          path='/carrito'
          element={
            <Carrito
              changuito={changuito}
              agregarProducto={agregarProducto}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
