import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import Home from './screens/Home.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Footer from './components/footer/footer.jsx'
import ErrorPage from './error/ErrorPage.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Card from './screens/CardData.jsx'
import LoginPage from "./components/login/LoginPage.jsx";
import SignUp from "./components/signup/signup.jsx";
const route=createBrowserRouter(
  [
    {
      path:"/",
      element:<Home/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"about",
          element:<About/>,
          errorElement:<ErrorPage/>
        },
        {
          path:"contact",
          element:<Contact/>,
          errorElement:<ErrorPage/>
        },
        {
          path:"",
          element:<Card/>,
          errorElement:<ErrorPage/>
        },
        {
          path:"/login",
          element:<LoginPage/>,
          errorElement:<ErrorPage/>,
       
        },
        {
          path:"/signup",
          element:<SignUp/>,
          errorElement:<ErrorPage/>
        }
      ]
    },
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
