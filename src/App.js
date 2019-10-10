import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import MenuComponet from './components/MenuComponent'


function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <MenuComponet />
    </div>
  );
}

export default App;
