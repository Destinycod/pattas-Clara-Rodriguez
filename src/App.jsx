import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Cart from './components/Cart/Cart';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartContextProvider from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Header/>
            <Routes>
              <Route exact path="/"
              element={ <ItemListContainer/> } 
              />
              <Route exact path="/carrito"
              element={ <Cart /> } 
              />
              <Route exact path="/detalle/:idItem"
              element={ <ItemDetailContainer /> } 
              />
              <Route exact path="/categoria/:idCategoria"
              element={ <ItemListContainer /> } 
              />
              <Route exact path="/contacto"
              element={ <ContactForm /> } 
              />
              {/* <Route exact path="/comprar"
              element={ <Contacto /> } 
              /> */}
            </Routes>
          <Footer/>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}

export default App
