import React from 'react'

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
const App = () => {

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Route>
  )
);

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
