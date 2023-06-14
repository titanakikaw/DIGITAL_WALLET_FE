import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import BaseLayout from './layouts/BaseLayout';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main';
import { AuthProvider } from './context/AuthContext';
import { StatusProvider } from './context/StatusContext';

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<BaseLayout/>} >
      <Route path='dashboard' element={<MainLayout/>}>
        <Route index element={<Main />}/>
      </Route>
      <Route path='auth' element={<AuthLayout/>}>
        <Route index element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
      </Route>
    </Route>
  )
  );


const App = () => {
  return (
    <StatusProvider>
      <AuthProvider>
        <RouterProvider router={route}/>
      </AuthProvider>
    </StatusProvider>
  )
}

export default App