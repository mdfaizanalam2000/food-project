import './App.css';
import Cart from './components/Cart';
import Delivery from './components/Delivery';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/eats/stores/:id/menus' element={<Menu />} exact />
            <Route path='/cart' element={<Cart />} exact />
            <Route path='/delivery' element={<Delivery />} exact />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
