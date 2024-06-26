import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import store from "./store.mjs"
import './styleLogo/index.css';
//import './styleLogo/updated_custom.css';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/Homescreen';
import RegisterScreen from './screens/RegisterScreen';
import ProductScreen from './screens/ProductScreen';
import ShippingScreen from './screens/ShippingScreen';
import PrivateRoute from './components/PrivateRoute';
import PaymentScreen from './screens/PaymentScreen';
import { Provider } from "react-redux"

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
    <Route index={true} path='/' element={<HomeScreen/>}/>
    <Route  path='/product/:id' element={<ProductScreen/>}/>
    <Route path='/cart' element={<CartScreen/>}/>
    <Route path='/login' element={<LoginScreen/>}/>
    <Route path='/register' element={<RegisterScreen />} />
    <Route path='' element={<PrivateRoute />}>
    <Route path='/shipping' element={<ShippingScreen />} />
    <Route path='/payment' element={<PaymentScreen />} />

      </Route>
    



    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store ={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
