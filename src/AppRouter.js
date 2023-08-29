import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import About from "./pages/About";
import Collections from "./pages/Collections";
import Rings from "./pages/Rings";
import Earrings from "./pages/Earrings";
import Necklaces from "./pages/Necklaces";
import Bracelets from "./pages/Bracelets";
import Admin from "./pages/Admin";

export default function() {

    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/collections" element={<Collections/>} />
                <Route path="/rings" element={<Rings/>} />
                <Route path="/earrings" element={<Earrings/>} />
                <Route path="/necklaces" element={<Necklaces/>} />
                <Route path="/bracelets" element={<Bracelets/>} />
                <Route path="/admin" element={<Admin/>} />
            </Routes>
        </Router>
    )
}