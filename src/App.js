import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import MainComponent from './components/MainComponent';
import ProductComponent from './components/ProductComponent';
import products from './vschoolProducts';
// Set up the React app from scratch
// Render an App component (defined in a separate file)
// Inside App, render:
  // 1. A Navbar component
  // 2. A MainContent component
  // 3. A Footer component
  const productsCompArray = products.map( product =>  <ProductComponent
    key={product.id}
    product={product}/> );

class App extends Component{
  render() {
    return (
      <div className="App">
      <NavBar/>
      <div>
           {productsCompArray}
       </div>
       <Footer/>
       </div>
    );
  }
}

export default App;
