# Marvel Store

La idea es poder hacer un carrito de compra de productos Marvel, con la utilización de la API de Marvel para obtener la información necesaria.

Lo primero es crear una aplicación en React, para esto ejecutamos el siguiente comando:

`npx create-react-app marvel-store`

Dentro de la carpeta `marvel-store` nos creará toda la estructura básica para nuestra aplicación.

para poder verificar que el script realizo todo correctamente dentro de la carpeta del proyecto corremos el comando:

`npm start`

y verificamos que en el navegador este disponible la pantalla de bienvenidad de react para la aplicación.

# React-Boostrap

Instalamos el framework Boostrap adaptado para su utilización en React,

`npm install react-bootstrap bootstrap`

Luego para poder utilizar los estilos CSS de framework debemos realizar un `import` dentro del archivo `index.js` así afecta a todos los demas componentes que serán invocados desde nuestra aplicación.

`import 'bootstrap/dist/css/bootstrap.min.css';`

# Iconos

Para poder utilizar iconos de manera mas fluida, podemos hacer uso de react-icons

`npm install react-icons --save`

# Varias páginas

Para poder contar con varias páginas en nuestra aplicacion vamos a instalar el módulo `react-router-dom` que nos permite tener un mecanismo para mostrar los diferentes componentes en la aplicación, para esto ejecutamos el siguiente comando:

`npm i react-router-dom`

# Marvel API

Para utilizar la API de Marvel debemos tener la capacidad de hashear en md5 por lo que tenemos que instalar el modulo correspondiente con el siguiente comando:

`npm install md5`

Debemos realizar el md5 de la concatenacion en texto de un timestamp, la private key y la public key. Una vez realizado este proceso se conforma la url según las especificaciones de la API, como sigue:

`[apiURL]?ts=' + TIMESTAMP + '&apikey=' + PUBLIC_KEY + '&hash=' + HASH'`

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
