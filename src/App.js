import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Contenido from './Contenido/Contenido';
import Cart from './Cart/Cart';
import Detalle from './DetalleProducto/DetalleProducto';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React, { useState } from 'react';


import imagen1 from './images/1.jpg';
import imagen2 from './images/2.jpg';
import imagen3 from './images/3.jpg';
import imagen4 from './images/4.jpg';
import imagen5 from './images/5.jpg';
import imagen6 from './images/6.jpg';
import imagen7 from './images/7.jpg';
import imagen8 from './images/8.jpg';
import imagen9 from './images/9.jpg';


function App() {
  

  const zapat = [
    {'src':imagen1, 'titulo': 'Puma react', 'precio': 9.00, 'unidades': 0, 'descripcion': 'Producto 100% diseñado para ti' },
    {'src':imagen2, 'titulo': 'Jordans1 black&white', 'precio': 10.00, 'unidades': 0, 'descripcion': 'Producto 100% diseñado para ti' },
    {'src':imagen3, 'titulo': 'Nike Pegasso', 'precio': 11.99, 'unidades': 0, 'descripcion': 'Producto 100% diseñado para ti' },
    {'src':imagen4, 'titulo': 'Calvin', 'precio': 12.99, 'unidades': 0, 'descripcion': 'Producto 100% diseñado para ti' },
    {'src':imagen5, 'titulo': 'Tacon1', 'precio': 13.99, 'unidades': 0, 'descripcion': 'Producto 100% diseñado para ti' },
    {'src':imagen6, 'titulo': 'Air Jordan Militar', 'precio': 120.00, 'unidades': 0, 'descripcion': 'Producto 100% diseñado para ti' },
    {'src':imagen7, 'titulo': 'Tacon Flores', 'precio': 46.99, 'unidades': 0, 'descripcion': 'Producto 100% diseñado para ti' },
    {'src':imagen8, 'titulo': 'Nike Court Oranje', 'precio': 38.00, 'unidades': 0, 'descripcion': 'Producto 100% diseñado para ti' },
    {'src':imagen9, 'titulo': 'Nike Court Black Brand', 'precio': 18.99, 'unidades': 0, 'descripcion': 'Producto 100% diseñado para ti' }]

    if(localStorage.getItem('Carrito')){
      var carrito = JSON.parse(localStorage.getItem('Carrito'))
      console.log('SI')
    }else{
      var carrito = [];
    }

  const [datos, setDatos] = useState({zapatos:zapat,carrito:carrito});

  //Funcion boton añadir al carrito
  const anadir = (zapato)=>{
    datos.carrito.push(zapato)
    setDatos({
      zapatos:zapat,
      carrito:[ ...datos.carrito],
    })}

  const sumar = (indice)=>{
    datos.carrito[indice].unidades++
    setDatos({
      zapatos:zapat,
      carrito:[...datos.carrito]
    })}

  const restar = (indice)=>{
    datos.carrito[indice].unidades--
    setDatos({
      zapatos:zapat,
      carrito:[...datos.carrito]
    })}

  const quitar = (indice)=>{
    datos.carrito.splice(indice,1)
    
    setDatos({
      zapatos:zapat,
      carrito:[ ...datos.carrito],
      
    })

  }



  return (
    <div className="App">
        <Router>
        <Header/>
          <Routes>
          
            <Route path='/' element={<Contenido zapatos={datos.zapatos} carrito={datos.carrito} anadir={anadir} aumentar={sumar} />}/>
            <Route path='/carrito' element={<Cart carrito={datos.carrito} disminuir={restar} aumentar={sumar} eliminar={quitar}/>} />
            <Route path="/detalle/:id" element={<Detalle zapatos={datos.zapatos}/>} />
          </Routes>
          <Footer/>
        </Router>

    </div>
  );
}

export default App;
