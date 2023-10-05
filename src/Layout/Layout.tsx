import Footer from "../Components/Footer";
import Main from "../Components/Main";
import Navbar from "../Components/Navbar";
import { PropsMain } from "../Components/Main/Main";
import React from "react";


const Layout: React.FC<PropsMain> = ({ children }) => {

    return (
        <>
            <Navbar />
            <Main >
                {children}
            </Main>
            <Footer />
        </>
    )
}


export default Layout;