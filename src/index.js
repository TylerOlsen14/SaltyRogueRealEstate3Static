import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom'
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
, document.getElementById('root'));

// const routes = {
//   home: {
//     path: '/',
//     component: path.resolve(__dirname, 'home.js'),
//   },
//   about: {
//     path: '/about',
//     component: path.resolve(__dirname, 'about.js'),
//   },
//   contact: {
//     path: '/contact',
//     component: path.resolve(__dirname, 'contact.js')
//   },
//   Success: {
//     path: '/success',
//     component: path.resolve(__dirname, 'success.js')
//   },
//   EmmaStreet: {
//     path: '/EmmaStreet',
//     component: path.resolve(__dirname, 'EmmaStreet.js')
//   },
//   LaurelStreet: {
//     path: '/LaurelStreet',
//     component: path.resolve(__dirname, 'LaurelStreet.js')
//   }
// }

// // Same keys as 'routes', but the value is only the path.
// const paths = Object.keys(routes).reduce((acc, route) => {
//   acc[route] = routes[route].path
//   return acc
// }, {})

// module.exports = { routes, paths }