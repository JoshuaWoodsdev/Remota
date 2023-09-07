import React from "react";
import GlobalStyles from "../styles/GlobalStyles";

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            <div>
                <header>
                    {/* Your header content here */}
                    <h1>Remota</h1>

                    <h1>Navbar</h1>
                </header>
                {children}
                <footer>
                    {/* Your footer content here */}
                    <p>© 2023 Remota, Inc.</p>
                </footer>
            </div>
        </>
    );
};



export default Layout;