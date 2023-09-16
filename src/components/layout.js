import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Navbar from "./navbar";
import Footer from "./footer";
import 'tachyons/css/tachyons.min.css';
import { navigate } from "gatsby"

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            <div>
                <header>
                    <Navbar />
                </header>
                {children}
                <Footer />
            </div>
        </>
    );
};



export default Layout;