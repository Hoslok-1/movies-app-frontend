import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Purchase from './components/Purchase/Purchase';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { AuthProvider } from './AuthContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}></Route>
        <Route path='movie/:imdbId/:poster' element= {<Purchase/>}></Route>
        <Route path='about' element={<About/>}></Route>
      </Route>
      <Route path='/login' element={<Login/>}> </Route>
      <Route path='/register' element={<Register/>}> </Route>
    </>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>
);



