import React from "react";
import Navbar from "../components/header/navbar";
import Footer from "../components/footer/footer";
import { Outlet } from "react-router-dom";
export default function Home()
{
    return(
        <>
        <div>
            <Navbar/>
            <Outlet/>
            
            <Footer/>
        </div>
        </>
    )
}