import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Navbar from "./navbar";
import 'tachyons/css/tachyons.min.css';


const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            <div>
                <header>
                    <Navbar />
                </header>
                {children}
                <footer>
                    <p>© 2023 Remota, Inc.</p>
                </footer>
            </div>
        </>
    );
};



export default Layout;