import React from "react";
import Nav from "../../components/Dashboard/Nav";
import ScrollToTop from "../../components/Dashboard/ScrollToTop";
import Sidebar from "../../components/Dashboard/Sidebar";
import Footer from "../../components/Dashboard/Footer";

const Layout = ({children}) => {
    return (
        <>
            <div id="wrapper" style={{maxHeight:"100vh"}}>
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Nav />
                        {children}
                    </div>
                    <Footer />
                </div>
            </div>

      </>
    )
}

export default Layout;
