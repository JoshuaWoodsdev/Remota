import React from "react";
import GlobalStyles from "../styles/GlobalStyles";

import 'tachyons/css/tachyons.min.css';
import Navbar from "./navbar";
import Footer from "./footer";


const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            <div>
                <header>
                    <Navbar/>
                </header>
                {children}
                <Footer/>
            </div>
        </>
    );
};



export default Layout;