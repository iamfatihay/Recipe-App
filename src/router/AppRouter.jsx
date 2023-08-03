import React, { useContext } from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
import Login from "../pages/login/Login";
import Footer from "../components/footer/Footer";
import PrivateRouter from './PrivateRouter';
import Register from '../pages/register/register';
import { AuthContext } from "../context/AuthContext";



const AppRouter = () => {

    const { currentUser } = useContext(AuthContext);
    return (
        <>
            {currentUser ? (<Navbar />) : null}
            <Routes>

                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/home" element={<PrivateRouter />}>
                    <Route path="" element={<Home />} />
                </Route>

                <Route path="/about" element={<PrivateRouter />}>
                    <Route path="" element={<About />} />
                </Route>

                <Route path="/details" element={<Details />} />

            </Routes>
            {currentUser ? (<Footer />) : null}
        </>
    )
}

export default AppRouter