import './App.css';
import Cart from './components/Cart';
import Delivery from './components/Delivery';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/Register';
import Profile from './components/Profile';
import UpdateProfile from './components/UpdateProfile';
import ForgotPassword from './components/ForgotPassword';
import NewPassword from './components/NewPassword';
import ConfirmOrder from './components/ConfirmOrder';
import { useEffect, useState } from 'react';
import { loadUser } from './actions/userAction';
import store from "./store";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import Payment from "./components/Payment";
import OrderSuccess from "./components/OrderSuccess";
import ListOrders from "./components/ListOrders";
import OrderDetails from "./components/OrderDetails";

function App() {
  const [stripeApiKey, setStripeApiKey] = useState("");
  useEffect(() => {
    store.dispatch(loadUser());
    async function getStripeApiKey() {
      const { data } = await axios.get("/api/v1/stripeapi");
      setStripeApiKey(data.stripeApiKey);
    }
    getStripeApiKey();
  }, [])

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
            <Route path='/users/login' element={<Login />} exact />
            <Route path='/users/signup' element={<Register />} exact />
            <Route path='/users/me' element={<Profile />} exact />
            <Route path='/users/me/update' element={<UpdateProfile />} exact />
            <Route path='/users/forgetPassword' element={<ForgotPassword />} exact />
            <Route path='/users/resetPassword/:token' element={<NewPassword />} exact />
            <Route path='/confirm' element={<ConfirmOrder />} exact />
            {stripeApiKey && (
              <Route path='/payment' element={<Elements stripe={loadStripe(stripeApiKey)}>
                <Payment />
              </Elements>} />
            )}
            <Route path='/success' element={<OrderSuccess />} />
            <Route path='/eats/orders/me/myOrders' element={<ListOrders />} />
            <Route path='/eats/orders/:id' element={<OrderDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
